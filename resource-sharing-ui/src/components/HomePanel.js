import React, {Component} from "react";
import AppTopbar from "./Assets/AppTopbar";
import {connect} from "react-redux";
import {loanProductsMountedThunk} from "../actions/loan-products-actions";
import ProductBoxForHomePanel from "./Assets/ProductBoxForHomePanel";
import BorrowProductModal from "./Assets/BorrowProductModal";

import "../css-files/HomePanel.css";

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.login.loggedInUser,
        products: state.loanProducts.products,
        loadInProgress: state.loanProducts.loadInProgress,
        loadError: state.loanProducts.loadError
    }
};

const mapDispatchToProps = dispatch => ({
    onMount: () => dispatch(loanProductsMountedThunk())
});


class HomePanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            productToBorrow: {},
            searchInput: "",
        };
        this.borrowProductCallback = this.borrowProductCallback.bind(this);
        this.borrowProductCancelCallback = this.borrowProductCancelCallback.bind(this);
        this.borrowProductDoneCallback = this.borrowProductDoneCallback.bind(this);
    }

    componentDidMount() {
        this.props.onMount();
    }

    borrowProductCallback(productObj) {
        this.setState({visible: true, productToBorrow: productObj});
    }

    borrowProductCancelCallback(productObj) {
        this.setState({visible: false});
    }

    borrowProductDoneCallback(productObj) {
        this.setState({visible: false});
    }

    onChangeSearchInput(e) {
        this.setState({searchInput: e.target.value});
    }

    constructContentHtml() {
        if (this.props.loadError) {
            return <div> Something went wrong!</div>
        } else if (this.props.loadInProgress) {
            return <div> Loading products... </div>
        } else {
            let productsToDisplay = this.props.products.filter(product => product.name.toUpperCase().indexOf(this.state.searchInput.toUpperCase()) > -1);
            return productsToDisplay.map((currentProduct, index) => {
                //the call back is very important (do similar for add/edit product)
                return <div className="product"><ProductBoxForHomePanel productObj={currentProduct} key={index}
                                                                        borrowCallback={this.borrowProductCallback}/>
                </div>;
            });
        }
    }


    render() {
        const content = this.constructContentHtml();
        let borrowModal = <br/>;
        if (this.state.visible) {
            borrowModal = <BorrowProductModal
                product={this.state.productToBorrow}
                fromUser={this.state.productToBorrow.owner.id}
                toUser={this.props.currentUser.id}
                productId={this.state.productToBorrow.id}
                onBorrowCancel={this.borrowProductCancelCallback}
                onBorrowDone={this.borrowProductDoneCallback}
            />;
        }
        ;

        return <div className="content">
            <AppTopbar username={this.props.currentUser.firstName + " " + this.props.currentUser.lastName}/>
            <input
                placeholder="Search"
                onChange={(e) => this.onChangeSearchInput.call(this, e)}
            />
            <div className='products-area'>
                {content}
            </div>
            {borrowModal}
        </div>
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePanel);
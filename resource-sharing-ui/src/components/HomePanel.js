import React, {Component} from "react";
import AppTopbar from "./Assets/AppTopbar";
import {connect} from "react-redux";
import {loanProductsMountedThunk} from "../actions/loan-products-actions";
import ProductBox from "./Assets/ProductBox";
import ProductBoxForHomePanel from "./Assets/ProductBoxForHomePanel";

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

    componentDidMount() {
        this.props.onMount();
    }

    borrowProductCallback() {
        console.log("dj");
    }

    constructContentHtml() {
        if (this.props.loadError) {
            return <div> Something went wrong!</div>
        } else if (this.props.loadInProgress) {
            return <div> Loading products... </div>
        } else {
            return this.props.products.map((currentProduct, index) => {
                //the call back is very important (do similar for add/edit product)
                return <ProductBoxForHomePanel productObj={currentProduct} key={index} borrowCallback={this.borrowProductCallback}/>;
            });
        }
    }


    render() {
        const content = this.constructContentHtml();
        return <div>
            <AppTopbar username={this.props.currentUser.firstName + " " + this.props.currentUser.lastName}/>
            {content}
        </div>
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePanel);
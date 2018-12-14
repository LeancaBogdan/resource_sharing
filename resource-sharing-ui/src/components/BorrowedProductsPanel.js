import React, {Component} from 'react';
import {getBorrowedProductsThunk} from "../actions/get-borrowed-products-actions";
import {connect} from "react-redux";
import AppTopbar from "./Assets/AppTopbar";
import ProductBoxForBorrowedProductsPanel from "./Assets/ProductBoxForBorrowedProductsPanel";
import "../css-files/BorrowedProductsPanel.css";

const mapStateToProps = (state) => {
    return {
        currentUser: state.login.loggedInUser,
        products: state.borrowedProducts.products,
        getBorrowedProductsInProgress: state.borrowedProducts.getBorrowedProductsInProgress,
        getBorrowedProductsError: state.borrowedProducts.getBorrowedProductsError
    }
};

const mapDispatchToProps = dispatch => ({
    onMount: (userId) => dispatch(getBorrowedProductsThunk(userId))
});

class BorrowedProductsPanel extends Component {

    componentDidMount() {
        this.props.onMount(this.props.currentUser.id);
    }

    constructContentHtml() {
        if (this.props.getBorrowedProductsError) {
            return <div> Something went wrong!</div>
        } else if (this.props.getBorrowedProductsInProgress) {
            return <div> Loading products... </div>
        } else {
            return this.props.products.map((currentProduct, index) => {
                return <div className="product">
                    <ProductBoxForBorrowedProductsPanel productObj={currentProduct} key={index}/>
                </div>
            })
        }

    }

    render() {
        const content = this.constructContentHtml();
        return <div className="borrowed-products-content">
            <AppTopbar username={this.props.currentUser.firstName + " " + this.props.currentUser.lastName}/>
            <div className='products-area'>
                {content}
            </div>
        </div>
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BorrowedProductsPanel)
import React, {Component} from 'react';
import {getLoanedProductThunk} from "../actions/get-loaned-products-actions";
import {connect} from "react-redux";
import AppTopbar from "./Assets/AppTopbar";
import ProductBoxForLoanedProductsPanel from "./Assets/ProductBoxForLoanedProductsPanel";

const mapStateToProps = (state, ownProps) => {
    return{
        currentUser: state.login.loggedInUser,
        products: state.loanedProducts.products,
        getLoanedProductsInProgress: state.loanedProducts.getLoanedProductsInProgress,
        getLoanedProductsError: state.loanedProducts.getLoanedProductsError
    }
};

const mapDispatchToProps = dispatch => ({
    onMount: (userId) => dispatch(getLoanedProductThunk(userId))
});

class LoanedProductsPanel extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.onMount(this.props.currentUser.id);
    }

    constructContentHtml() {
        if (this.props.getLoanedProductsError) {
            return <div> Something went wrong!</div>
        } else if (this.props.getLoanedProductsInProgress) {
            return <div> Loading products... </div>
        } else {
            return this.props.products.map((currentProduct, index) => {
                return <ProductBoxForLoanedProductsPanel productObj = {currentProduct} key = {index}/>
            })
        }

    }

    render(){
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
)(LoanedProductsPanel)
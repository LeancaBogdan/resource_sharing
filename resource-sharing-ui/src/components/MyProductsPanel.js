import React, {Component} from 'react';
import {myProductsMountedThunk} from "../actions/my-products-actions";
import {connect} from "react-redux";
import AppTopbar from "./Assets/AppTopbar";
import ProductBoxForMyProductsPanel from "./Assets/ProductBoxForMyProductsPanel";

const mapStateToProps = (state, ownProps) => {
    return {
        currentUserEmail: state.login.loggedInUser.email,
        products: state.myProducts.products,
        loadInProgress: state.myProducts.loadInProgress,
        loadError: state.myProducts.loadError
    }
};

const mapDispatchToProps = dispatch => ({
    onMount: (email) => dispatch(myProductsMountedThunk(email))
});

class MyProductsPanel extends Component {
    componentDidMount() {
        this.props.onMount(this.props.currentUserEmail);
    }

    constructContentHtml() {
        if (this.props.loadError) {
            return <div> Something went wrong!</div>
        } else if (this.props.loadInProgress) {
            return <div> Loading products... </div>
        } else {
            return this.props.products.map((currentProduct, index) => {
                return <ProductBoxForMyProductsPanel productObj={currentProduct} key={index}/>;
            });
        }
    }

    render() {
        const content = this.constructContentHtml();
        return <div>
            <AppTopbar/>
            {/*on click, a modal for add will be opened
            TO SEE HOW -> Home panel for borrow button*/}
            <button className={'btn btn-primary'}> Add product </button>
            {content}
        </div>
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyProductsPanel);
import React, {Component} from 'react';
import {myProductsMountedThunk} from "../actions/my-products-actions";
import {connect} from "react-redux";
import AppTopbar from "./Assets/AppTopbar";
import ProductBoxForMyProductsPanel from "./Assets/ProductBoxForMyProductsPanel";
import AddProductModal from "./Assets/AddProductModal";
import "../css-files/MyProductsPanel.css";
import EditProductModal from "./Assets/EditProductModal";

const mapStateToProps = (state, ownProps) => {
    return {
        currentUserId: state.login.loggedInUser.id,
        currentUserEmail: state.login.loggedInUser.email,
        products: state.myProducts.products,
        loadInProgress: state.myProducts.loadInProgress,
        loadError: state.myProducts.loadError,
        currentUser: state.login.loggedInUser
    }
};

const mapDispatchToProps = dispatch => ({
    onMount: (email) => dispatch(myProductsMountedThunk(email))
});

class MyProductsPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            editVisible: false,
            productObjToEdit: {}
        };

        this.addProductCancelCallback = this.addProductCancelCallback.bind(this);
        this.addProductDoneCallback = this.addProductDoneCallback.bind(this);
        this.deleteProductDoneCallback = this.deleteProductDoneCallback.bind(this);
        this.editProductDoneCallback = this.editProductDoneCallback.bind(this);
        this.editProductCallback = this.editProductCallback.bind(this);
        this.editProductCancelCallback = this.editProductCancelCallback.bind(this);
    }

    componentDidMount() {
        this.props.onMount(this.props.currentUserEmail);
    }

    addProductCancelCallback(productObj) {
        this.setState({visible: false});
    }

    addProductDoneCallback(productObj) {
        this.setState({visible: false});
        this.props.onMount(this.props.currentUserEmail);
    }

    deleteProductDoneCallback() {
        this.props.onMount(this.props.currentUserEmail);
    }

    editProductCallback(productObj) {
        this.setState({editVisible: true, productObjToEdit: productObj});
    }

    editProductDoneCallback() {
        this.setState({editVisible: false});
        this.props.onMount(this.props.currentUserEmail);
    }

    editProductCancelCallback() {
        this.setState({editVisible: false});
    }

    constructContentHtml() {
        if (this.props.loadError) {
            return <div> Something went wrong!</div>
        } else if (this.props.loadInProgress) {
            return <div> Loading products... </div>
        } else {
            return this.props.products.map((currentProduct, index) => {
                return <div className="product">
                    <ProductBoxForMyProductsPanel productObj={currentProduct} key={index}
                                                  onDeleteDone={this.deleteProductDoneCallback}
                                                  editCallback={this.editProductCallback}
                    />
                </div>
            });
        }
    }

    render() {
        const content = this.constructContentHtml();
        let addModal = <br/>;
        let editModal = <br/>;
        if (this.state.visible) {
            addModal = <AddProductModal
                userId={this.props.currentUserId}
                onAddCancel={this.addProductCancelCallback}
                onAddDone={this.addProductDoneCallback}
            />;
        }

        if (this.state.editVisible){
            editModal = <EditProductModal
                productObj={this.state.productObjToEdit}
                onEditCancel={this.editProductCancelCallback}
                onEditDone={this.editProductDoneCallback}
            />;
        }

            return <div className="content">
                <AppTopbar username={this.props.currentUser.firstName + " " + this.props.currentUser.lastName}/>
                <button className={'btn btn-primary'}
                        onClick={() => this.showAddPanel()}
                > Add product
                </button>
                <div className='products-area'>
                    {content}
                </div>
                {addModal}
                {editModal}
            </div>
    }

    showAddPanel() {
        this.setState({visible: true});
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyProductsPanel);
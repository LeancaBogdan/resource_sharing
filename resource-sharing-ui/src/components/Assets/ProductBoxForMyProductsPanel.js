import React, {Component} from 'react';
import active from "../../images/active.png";
import notActive from "../../images/not-active.png";
import imagePlaceholder from "../../images/photoplaceholder.png";
import "../../css-files/PhotoBoxForMyProductsPanel.css";
import {deleteProductThunk} from "../../actions/delete-product-actions";
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => ({
    onDeleteClick: (productId) => dispatch(deleteProductThunk(productId))
});

class ProductBoxForMyProductsPanel extends Component {

    render() {
        let isActiveImage;
        if (this.props.productObj.isActive) {
            isActiveImage = active;
        } else {
            isActiveImage = notActive;
        }

        return <div>
            <div className="product-box">
                <div className="name"> {this.props.productObj.name}</div>
                <div><img src={imagePlaceholder} alt="Placeholder for products" className="photo-placeholder"/></div>
                <div className="price"> Price: {this.props.productObj.borrowingPrice} RON</div>
                <div className="is-active-area">
                    Available to borrow:
                    <img src={isActiveImage} alt="Is active status" className="is-active"/>
                </div>
                <button className="btn btn-primary btn-sm delete-btn" onClick={() => {
                    this.props.onDeleteClick(this.props.productObj.id);
                    this.props.onDeleteDone();
                }}> Delete
                </button>
                <button className="btn btn-primary btn-sm edit-btn" onClick={() => {
                    this.props.editCallback(this.props.productObj);
                }}> Edit
                </button>
            </div>
        </div>
    }
}

export default connect(
    null,
    mapDispatchToProps
)(ProductBoxForMyProductsPanel)


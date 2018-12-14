import React, {Component} from 'react';
import active from "../../images/active.png";
import notActive from "../../images/not-active.png";
import imagePlaceholder from "../../images/photoplaceholder.png";
import "../../css-files/PhotoBoxForMyProductsPanel.css";
import {deleteProductThunk} from "../../actions/delete-product-actions";
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => {
    return {}
};

const mapDispatchToProps = dispatch => ({
    onDeleteClick: (productId) => dispatch(deleteProductThunk(productId))
});

class ProductBoxForMyProductsPanel extends Component {
    /* How a product looks like:
    {
        "owner": {
            "firstName": "Name",
            "lastName": "Lastname",
            "email": "test@test.com",
            "password": "",
            "role": 1,
            "id": "86987f61-4465-49c6-9170-94deac39cf51"
        },
        "name": "Product of name",
        "description": "nothing",
        "borrowingPrice": 100,
        "isActive": true,
        "id": "d0cc358b-cb4f-43fa-9a4d-4abd0c28de1e"
    }
    */
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
                <div><img src={imagePlaceholder} alt="Photo placeholder" className="photo-placeholder"/></div>
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
    mapStateToProps,
    mapDispatchToProps
)(ProductBoxForMyProductsPanel)


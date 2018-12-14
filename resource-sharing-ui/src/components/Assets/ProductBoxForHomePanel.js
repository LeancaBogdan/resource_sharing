import React, {Component} from 'react';
import active from "../../images/active.png";
import notActive from "../../images/not-active.png";
import imagePlaceholder from "../../images/photoplaceholder.png";

import "../../css-files/PhotoBoxForHomePanel.css";

class ProductBoxForHomePanel extends Component {
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
                <button className="btn btn-primary btn-sm borrow-btn" onClick={() => {
                    this.props.borrowCallback(this.props.productObj)
                }}> Borrow
                </button>
            </div>
        </div>
    }
}

export default ProductBoxForHomePanel;


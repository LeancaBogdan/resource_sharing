import React, {Component} from 'react';
import imagePlaceholder from "../../images/photoplaceholder.png";

class ProductBoxForBorrowedProductsPanel extends Component {

    render() {
        const borrowDate = this.props.productObj.datePicked.toString().substring(0, 10);
        const returnDate = this.props.productObj.dateToReturn.toString().substring(0, 10);
        return <div>
            <div className="product-box">

                <div className="name"> {this.props.productObj.borrowedProduct.name}</div>
                <div><img src={imagePlaceholder} alt="Photo placeholder" className="photo-placeholder"/></div>
                <div className="price">
                    <span style={{fontWeight: 'bold'}}> Price: </span>
                    {this.props.productObj.borrowedProduct.borrowingPrice} RON
                </div>
                <div className="loaned">
                    <span style={{fontWeight: 'bold'}}> Borrowed from: </span>
                    {this.props.productObj.owner.firstName + " " + this.props.productObj.owner.lastName}
                </div>
                <div className="borrow-date">
                    <span style={{fontWeight: 'bold'}}> Borrow Date: </span>
                    {borrowDate}
                </div>
                <div className="return-date">
                    <span style={{fontWeight: 'bold'}}> Return Date: </span>
                    {returnDate}
                </div>
            </div>
        </div>
    }
}

export default ProductBoxForBorrowedProductsPanel;
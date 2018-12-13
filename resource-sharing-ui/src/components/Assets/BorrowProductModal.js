import React, {Component} from 'react';
import "../../css-files/BorrowProductModal.css";
import {connect} from "react-redux";
import {borrowProductThunk} from "../../actions/borrow-product-actions";

const mapStateToProps = (state, ownProps) => {
    return {}
};

const mapDispatchToProps = dispatch => ({
    onBorrowClick: (fromUser, toUser, borrowDate, returnDate, productId) =>
        dispatch(borrowProductThunk(fromUser, toUser, borrowDate, returnDate, productId))
});

class BorrowProductModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            borrowDate: "",
            returnDate: ""
        }
    }

    onChangeBorrowDateInput(e) {
        this.setState({borrowDate: e.target.value});
    }

    onChangeReturnDateInput(e) {
        this.setState({returnDate: e.target.value});
    }


    render() {
        return <div className='borrow-modal'>
            <div className='modal-title'> Borrow {this.props.product.name} </div>
            <div className="product-price">
                <span style={{fontWeight: 'bold'}}> Price: </span> {this.props.product.borrowingPrice} RON
            </div>
            <div className="description">
                <span style={{fontWeight: 'bold'}}> Description: </span>{this.props.product.description} </div>
            <div className="borrow-date">
                <span style={{fontWeight: 'bold'}}> Borrow Date: </span>
                <input type="text"
                       placeholder="dd-mm-yyyy"
                       onChange={(e) => this.onChangeBorrowDateInput.call(this, e)}/>
            </div>
            <div className="return-date">
                <span style={{fontWeight: 'bold'}}> Return Date: </span>
                <input type="text"
                       placeholder="dd-mm-yyyy"
                       onChange={(e) => this.onChangeReturnDateInput.call(this, e)}/>
            </div>
            <div className="buttons">
                <button className='btn btn-primary btn-sm borrow-button' onClick={() => {
                    this.props.onBorrowClick(this.props.fromUser,
                        this.props.toUser,
                        this.state.borrowDate,
                        this.state.returnDate,
                        this.props.productId);
                    this.props.onBorrowDone();
                }}> Borrow
                </button>
                <button className="btn btn-primary btn-sm cancel-button" onClick={() => {
                    this.props.onBorrowCancel();
                }}> Cancel
                </button>
            </div>
        </div>
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BorrowProductModal);
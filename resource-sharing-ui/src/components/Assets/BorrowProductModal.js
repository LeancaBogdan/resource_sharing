import React, {Component} from 'react';
import "../../css-files/test.css";
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
        return <div className='borrow-modal-test-css'>
            <input type="text"
                   placeholder="dd-mm-yyyy"
                   onChange={(e) => this.onChangeBorrowDateInput.call(this, e)}/>
            <input type="text"
                   placeholder="dd-mm-yyyy"
                   onChange={(e) => this.onChangeReturnDateInput.call(this, e)}/>
            <button className='btn btn-primary' onClick={() => {
                this.props.onBorrowClick(this.props.fromUser,
                    this.props.toUser,
                    this.state.borrowDate,
                    this.state.returnDate,
                    this.props.productId);
            }}> Borrow
            </button>
        </div>
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BorrowProductModal);
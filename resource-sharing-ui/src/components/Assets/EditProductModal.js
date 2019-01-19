import React, {Component} from 'react';
import {connect} from "react-redux";
import "../../css-files/EditProductModal.css";
import {editProductThunk} from "../../actions/edit-product-actions";

const mapStateToProps = (state, ownProps) => {
    return {}
};

const mapDispatchToProps = dispatch => ({
    onEditClick: (name, description, price, isActive, productId) => {
        dispatch(editProductThunk(name, description, price, isActive, productId))
    }
});

class EditProductModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.productObj.name,
            description: this.props.productObj.description,
            price: this.props.productObj.borrowingPrice,
            isActive: true
        }
    }

    onChangeNameInput(e) {
        this.setState({name: e.target.value});
    }

    onChangeDescriptionInput(e) {
        this.setState({description: e.target.value});
    }

    onChangePriceInput(e) {
        this.setState({price: e.target.value});
    }

    render() {
        return <div className='edit-modal'>
            <div className='modal-title'>Edit product {this.state.name}</div>
            <div className='name-input'>
                <span style={{fontWeight: 'bold'}}> Name: </span>
                <input type="text"
                       placeholder="name"
                     value={this.state.name}
                       onChange={(e) => this.onChangeNameInput.call(this, e)}
                />
            </div>
            <div className='description-input'>
                <span style={{fontWeight: 'bold'}}> Description: </span>
                <input type="text"
                       placeholder="description"
                    value={this.state.description}
                       onChange={(e) => this.onChangeDescriptionInput.call(this, e)}
                />
            </div>
            <div className="price-input">
                <span style={{fontWeight: 'bold'}}> Price: </span>
                <input type="number"
                       step="1"
                       placeholder="price"
                     value={this.state.price}
                       onChange={(e) => this.onChangePriceInput.call(this, e)}
                />
            </div>
            <div className="buttons">
                <button className="btn btn-primary btn-sm edit-button"
                        onClick={() => {
                            this.props.onEditClick(
                                this.state.name,
                                this.state.description,
                                this.state.price,
                                this.state.isActive,
                                this.props.productObj.id
                            );
                            this.props.onEditDone();
                        }}
                >Edit
                </button>
                <button className="btn btn-primary btn-sm cancel-button" onClick={() => {
                    this.props.onEditCancel();
                }}
                >Cancel
                </button>
            </div>
        </div>
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProductModal)
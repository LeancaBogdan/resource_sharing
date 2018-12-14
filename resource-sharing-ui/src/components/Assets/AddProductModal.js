import React, {Component} from 'react';
import "../../css-files/AddProductModal.css";
import {connect} from "react-redux";
import {addProductThunk} from "../../actions/add-product-actions";

const mapStateToProps = (state, ownProps) => {
    return {}
};

const mapDispatchToProps = dispatch => ({
    onAddClick: (name, description, price, isActive, userId) => {
        dispatch(addProductThunk(name, description, price, isActive, userId))
    }
});

class AddProductModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            price: -1,
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
        return <div className='add-modal'>
            <div className='modal-title'>Add product</div>
            <div className='name-input'>
                <span style={{fontWeight: 'bold'}}> Name: </span>
                <input type="text"
                       placeholder="name"
                       onChange={(e) => this.onChangeNameInput.call(this, e)}
                />
            </div>
            <div className='description-input'>
                <span style={{fontWeight: 'bold'}}> Description: </span>
                <input type="text"
                       placeholder="description"
                       onChange={(e) => this.onChangeDescriptionInput.call(this, e)}
                />
            </div>
            <div className="price-input">
                <span style={{fontWeight: 'bold'}}> Price: </span>
                <input type="number"
                       step="1"
                       placeholder="price"
                       onChange={(e) => this.onChangePriceInput.call(this, e)}
                />
            </div>
            <div className="buttons">
                <button className="btn btn-primary btn-sm add-button"
                        onClick={() => {
                            this.props.onAddClick(
                                this.state.name,
                                this.state.description,
                                this.state.price,
                                this.state.isActive,
                                this.props.userId
                            );
                            this.props.onAddDone();
                        }}
                >Add Product
                </button>
                <button className="btn btn-primary btn-sm cancel-button" onClick={() => {
                    this.props.onAddCancel();
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
)(AddProductModal)
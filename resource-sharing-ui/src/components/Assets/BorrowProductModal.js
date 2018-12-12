import React, {Component} from 'react';

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
        return <div>
            <input type="text"
                   placeholder="dd-mm-yyyy"
                   onChange={(e) => this.onChangeBorrowDateInput.call(this, e)}/>
            <input type="text"
                   placeholder="dd-mm-yyyy"
                   onChange={(e) => this.onChangeReturnDateInput.call(this, e)}/>
        </div>
    }
}
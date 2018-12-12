import React, {Component} from 'react';

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
        return <div>
            {/*When the user clicks on name, the edit modal opens*/}
            Name: {this.props.productObj.name}
            Desc: {this.props.productObj.description}
            <button className="btn btn-primary"> Delete </button>
        </div>
    }
}

export default ProductBoxForMyProductsPanel;

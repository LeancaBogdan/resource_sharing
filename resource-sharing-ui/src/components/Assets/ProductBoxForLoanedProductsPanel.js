import React, {Component} from 'react';

class ProductBoxForLoanedProductsPanel extends Component{
    /*
    {
        "owner": {
            "firstName": "Sorinel",
            "lastName": "Copilul de Aur",
            "email": "copiluldeaur@sorinel.com",
            "password": "",
            "role": 1,
            "id": "86987f61-4465-49c6-9170-94deac39cf51"
        },
        "borrower": {
            "firstName": "Florin",
            "lastName": "Salam",
            "email": "alnostruFS@yahoo.com",
            "password": "",
            "role": 0,
            "id": "d60fbd88-1e65-4f4b-8cc5-77d6c1f77c3a"
        },
        "borrowedProduct": {
            "owner": {
                "firstName": "Sorinel",
                "lastName": "Copilul de Aur",
                "email": "copiluldeaur@sorinel.com",
                "password": "",
                "role": 1,
                "id": "86987f61-4465-49c6-9170-94deac39cf51"
            },
            "name": "CD cu salam",
            "description": "Best album 2010",
            "borrowingPrice": 200,
            "isActive": true,
            "id": "346de477-c7b3-44bd-985d-a08fc02adc5a"
        },
        "datePicked": "2018-10-12T00:00:00",
        "dateToReturn": "2018-11-12T00:00:00",
        "id": "f6bcd7d4-2871-498c-a29d-b0a413d9e48e"
    }

     */

    render(){
        return <div>
            Product name: {this.props.productObj.borrowedProduct.name}
            Loaned to: {this.props.productObj.borrower.firstName + " " + this.props.productObj.owner.lastName}
            Price: {this.props.productObj.borrowedProduct.borrowingPrice}
            From : {this.props.productObj.datePicked}
            Until: {this.props.productObj.dateToReturn}
        </div>
    }
}

export default ProductBoxForLoanedProductsPanel;
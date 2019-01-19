class BorrowProductService {
    static borrowProduct(fromUser, toUser, borrowDate, returnDate, productId) {
        const options = {
            method: 'POST',
            headers: new Headers({'content-type': 'application/json'}),
            mode: 'cors',
            body: JSON.stringify({
                fromUser: fromUser,
                toUser: toUser,
                borrowDate: borrowDate,
                returnDate: returnDate,
                productId: productId
            })
        };

        return new Promise(function (resolve, reject) {
            console.log(options);
            fetch('http://127.0.0.1:8080/api/borrow', options)
                .then(function (response) {
                    if (response.status === 200) {
                        resolve(response);
                    }
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }
}

export default BorrowProductService;
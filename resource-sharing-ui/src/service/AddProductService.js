class AddProductService {

    static addProduct(name, description, price, isActive, userId){
        const options = {
            method: 'POST',
            headers: new Headers({'content-type': 'application/json'}),
            mode: 'cors',
            body: JSON.stringify({
                name: name,
                description: description,
                borrowingPrice: price,
                isActive: isActive,
                id: userId
            })
        };

        return new Promise(function (resolve, reject) {
            fetch('http://127.0.0.1:8080/api/products', options)
                .then(function (response) {
                    if(response.status === 200){
                        resolve(response);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    reject(error);
                });

        });
    }
}

export default AddProductService;
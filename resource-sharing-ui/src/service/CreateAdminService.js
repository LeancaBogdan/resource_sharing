class CreateAdminService{

    static createAdmin(userId){
        const options = {
            method: "PUT",
            headers: new Headers({'content-type': 'application/json'}),
            mode: 'cors'
        };

        return new Promise(function (resolve, reject) {
            fetch('http://127.0.0.1:8080/api/borrow/' + userId + '/borrower',options)
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

export default CreateAdminService;
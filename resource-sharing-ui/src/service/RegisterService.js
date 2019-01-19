class RegisterService {

    static register(firstName, lastName, email, password) {
        const options = {
            method: 'POST',
            headers: new Headers({'content-type': 'application/json'}),
            mode: 'cors',
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            })
        };

        return new Promise(function (resolve, reject) {
            fetch('http://127.0.0.1:8080/api/users', options)
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

export default RegisterService;
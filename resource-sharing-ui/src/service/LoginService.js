class LoginService {

    static login(email, password) {

        const options = {
            method: 'POST',
            headers: new Headers({'content-type': 'application/json'}),
            mode: 'cors',
            body: JSON.stringify({
                email: email,
                password: password
            })
        };

        return new Promise(function (resolve, reject) {
            fetch('http://192.168.178.29:8080/api/login', options)
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

export default LoginService;
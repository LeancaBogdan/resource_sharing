class LoginService {

    static login(email, password) {
        const options = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })

        };

        fetch('http://127.0.0.1:8080/api/login', options)
            .then(response => {
                if (response.ok) {
                    console.log("ok", response.json());
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            }).then(data => console.log(data))
            .catch(error => console.log(error));
    }

}

export default LoginService;
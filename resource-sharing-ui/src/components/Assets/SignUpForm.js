import React, {Component} from 'react';
import {Link} from "react-router-dom";
import '../../css-files/SignUpForm.css';

class SignUpForm extends Component {

    constructSignUpFields() {
        return <div className="sign-up-fields">

            <span className="first-name-label"> FIRST NAME</span>
            <input className="form-control mr-sm-2 first-name-input"
                   type="text"
                   placeholder="First Name..."
                   aria-label="First Name"/>

            <span className="last-name-label"> LAST NAME</span>
            <input className="form-control mr-sm-2 last-name-input"
                   type="text"
                   placeholder="Last Name..."
                   aria-label="Last Name"/>

            <span className="username-label"> USERNAME</span>
            <input className="form-control mr-sm-2 username-input"
                   type="text"
                   placeholder="Username..."
                   aria-label="Username"/>

            <span className="email-label"> EMAIL</span>
            <input className="form-control mr-sm-2 email-input"
                   type="text"
                   placeholder="E-mail..."
                   aria-label="Email"/>

            <div className="password-label"> PASSWORD</div>
            <input className="form-control mr-sm-2 password-input"
                   type="password"
                   placeholder="Password..."
                   autoFocus={false}
                   aria-label="Password"/>

            <Link to={"/home"}>
                <button className="btn btn-sm sign-up-button">SIGN UP</button>
            </Link>
        </div>
    }

    render() {
        const signUpFields = this.constructSignUpFields();
        return <div>
            {signUpFields}
        </div>
    }
}

export default SignUpForm;
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import '../../css-files/SignUpForm.css';
import {registerThunk} from "../../actions/register-actions";

const mapStateToProps = (state, ownProps) => {
    return {}
};

const mapDispatchToProps = dispatch => ({
    onRegisterClick: (firstName, lastName, email, password) => dispatch(registerThunk(firstName, lastName, email, password))
});

class SignUpForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        }
    }

    onChangePasswordInput(e) {
        this.setState({password: e.target.value});
    }

    onChangeEmailInput(e) {
        this.setState({email: e.target.value});
    }

    onChangeFirstNameInput(e) {
        this.setState({firstName: e.target.value});
    }

    onChangeLastNameInput(e) {
        this.setState({lastName: e.target.value});
    }

    constructSignUpFields() {
        return <div className="sign-up-fields">

            <span className="first-name-label"> FIRST NAME</span>
            <input className="form-control mr-sm-2 first-name-input"
                   type="text"
                   placeholder="First Name..."
                   aria-label="First Name"
                   onChange={(e) => this.onChangeFirstNameInput.call(this, e)}
            />

            <span className="last-name-label"> LAST NAME</span>
            <input className="form-control mr-sm-2 last-name-input"
                   type="text"
                   placeholder="Last Name..."
                   aria-label="Last Name"
                   onChange={(e) => this.onChangeLastNameInput.call(this, e)}
            />

            <span className="email-label"> EMAIL</span>
            <input className="form-control mr-sm-2 email-input"
                   type="text"
                   placeholder="E-mail..."
                   aria-label="Email"
                   onChange={(e) => this.onChangeEmailInput.call(this, e)}
            />

            <div className="password-label"> PASSWORD</div>
            <input className="form-control mr-sm-2 password-input"
                   type="password"
                   placeholder="Password..."
                   autoFocus={false}
                   aria-label="Password"
                   onChange={(e) => this.onChangePasswordInput.call(this, e)}
            />

            <Link to={"/"}>
                <button className="btn btn-sm sign-up-button"
                        onClick={() => {
                            this.props.onRegisterClick(this.state.firstName, this.state.lastName, this.state.email, this.state.password);
                        }}>SIGN UP
                </button>
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

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignUpForm);
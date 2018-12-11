import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {loginThunk} from "../actions/login-actions";

import "../css-files/LoginForm.css";

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.login.loggedInUser
    }
};

const mapDispatchToProps = dispatch => ({
    onLoginClick: (email, password) => dispatch(loginThunk(email, password))
});

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    onChangePasswordInput(e) {
        this.setState({password: e.target.value});
    }

    onChangeEmailInput(e) {
        this.setState({email: e.target.value});
    }


    constructLoginFields() {
        return <div className="login-fields">

            <span className="email-label"> EMAIL</span>
            <input className="form-control mr-sm-2 email-input"
                   type="text"
                   placeholder="E-mail..."
                   aria-label="Email"
                   onChange={(e) => this.onChangeEmailInput.call(this, e)}/>


            <div className="password-label"> PASSWORD</div>
            <input className="form-control mr-sm-2 password-input"
                   type="password"
                   placeholder="Password..."
                   autoFocus={false}
                   aria-label="Password"
                   onChange={(e) => this.onChangePasswordInput.call(this, e)}/>
            {/*<Link to={"/home"}>*/}
            <button className="btn btn-sm login-button"
                    onClick={() => {
                        this.props.onLoginClick(this.state.email, this.state.password);
                    }}> LOGIN
            </button>
            {/*</Link>*/}
        </div>
    }

    render() {

        const loginFields = this.constructLoginFields();
        return <div>
            {loginFields}
        </div>
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);
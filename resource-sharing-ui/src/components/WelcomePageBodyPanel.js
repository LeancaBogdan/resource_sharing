import React, {Component} from "react";
import "../css-files/WelcomePageBodyPanel.css";

import logoImage from "../images/logo_bar_2.png";
import LoginForm from "./Assets/LoginForm";
import SignUpForm from "./Assets/SignUpForm";

const mapStateToProps = (state,ownProps) => {

};

class WelcomePageBodyPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            doSignUpFlag: false
        };
        this.constructRightAreaHtml = this.constructRightAreaHtml.bind(this);
    }

    constructLeftAreaHtml() {
        return <div className="col-sm-4 left-area">
            <div className='logo-area'>
                <img className="logo-image" src={logoImage} alt='Resource Sharing'/>
            </div>
        </div>
    }

    constructRightAreaHtml() {

        let mainArea;
        let topText;

        if(!this.state.doSignUpFlag){
            mainArea = <LoginForm/>;
            topText= <div className='sign-up-texts'>
                <span className="need-account-text">Need an account?</span>
                <span className='sign-up-text' onClick={() => {
                    this.setState({doSignUpFlag: true});
                }}> Sign up here</span>
            </div>;
        }else{
            mainArea=<SignUpForm/>;
            topText = <div className='back-to-login-area'>
                <span className='back-to-login-text' onClick={() => {
                    this.setState({doSignUpFlag: false});
                }}> Back to Login </span>
            </div>;
        }


        return <div className="col-sm-8 right-area">
            {topText}
            {mainArea}
        </div>
    }

    render() {

        const leftArea = this.constructLeftAreaHtml();
        const rightArea = this.constructRightAreaHtml();
        return <div>
            <div className="row">
                {leftArea}
                {rightArea}
            </div>
        </div>
    }
}

export default WelcomePageBodyPanel;
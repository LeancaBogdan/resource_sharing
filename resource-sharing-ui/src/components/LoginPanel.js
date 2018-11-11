import React, {Component} from 'react';
import "../css-files/LoginPanel.css";
import bkgImage from "../images/maxresdefault.jpg";
import {Button} from 'react-bootstrap';


class LoginPanel extends Component {
    render() {
        return <div className="login-page">
            {/*<img src={bkgImage} alt="Background Image" className="background-image"/>*/}
            <Button bsStyle="danger" bsSize="large">Click me</Button>
        </div>
    }
}

export default LoginPanel
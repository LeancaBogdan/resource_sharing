import React, {Component} from 'react';
import logoImage from "../images/share2.png";
import {Link} from "react-router-dom";
import "../css-files/LoginTopbar.css";

class LoginTopbar extends Component {
    render() {
        return <div>
            <nav className="navbar navbar-expand-lg navbar-light navbar-default">
                <img src={logoImage} alt="Resource Sharing"/>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"
                               style={{
                                   "color": "white",
                                   "fontSize": "18px",
                                   "fontFamily": "\"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif;",
                                   "lineHeight": "10px",
                                   "height": "30px"
                               }}
                            >Resource Sharing</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2 email-input" type="text" placeholder="E-mail..."
                               aria-label="Email"/>
                        <input className="form-control mr-sm-2 password-input" type="password" placeholder="Password..."
                               aria-label="Password"/>
                        <Link to={"/home"}>
                            <button className="btn btn-sm login-button">Login</button>
                        </Link>

                    </form>
                </div>
            </nav>
        </div>
    }
}

export default LoginTopbar;
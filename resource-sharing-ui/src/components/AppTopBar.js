import React, {Component} from 'react';
import logoImage from "../images/share2.png";
import {Link} from "react-router-dom";
import "../css-files/AppTopBar.css";
import {ButtonToolbar, DropdownButton, MenuItem} from "react-bootstrap";



class AppTopBar extends Component {
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
                </div>
                <ButtonToolbar>
                    <DropdownButton
                        bsStyle="small"
                        title="Username"
                        noCaret
                        id="dropdown-no-caret"
                    >
                        <MenuItem eventKey="1">Home</MenuItem>
                        <MenuItem eventKey="2">Another action</MenuItem>
                        <MenuItem eventKey="3">Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="4">Log out</MenuItem>
                    </DropdownButton>
                </ButtonToolbar>
            </nav>
        </div>
    }
}

export default AppTopBar;
import React, {Component} from 'react';
import logoImage from "../images/share2.png";
import {Link} from "react-router-dom";
import "../css-files/AppTopBar.css";
import {ButtonToolbar, DropdownButton, MenuItem} from "react-bootstrap";



class AppTopBar extends Component {

    constructor(){
        super();

        this.state = {
            displayMenu: false,
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

    };

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });

    }


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
                <div  className="dropdown" >
                    <div className="button" onClick={this.showDropdownMenu}> Username </div>

                    { this.state.displayMenu ? (
                            <ul class="dropDownUl">
                                <li class="dropDownLi"><a className="active" href="#home">Home</a></li>
                                <li class="dropDownLi"><a href="#">Another action</a></li>
                                <li class="dropDownLi"><a href="#">Something else</a></li>
                                <li class="dropDownLi"><a href="#logout">Log Out</a></li>
                            </ul>
                        ):
                        (
                            null
                        )
                    }

                </div>

                {/*<ButtonToolbar>*/}
                    {/*<DropdownButton*/}
                        {/*bsStyle="small"*/}
                        {/*title="Username"*/}
                        {/*noCaret*/}
                        {/*id="dropdown-no-caret"*/}
                    {/*>*/}
                        {/*<MenuItem eventKey="1">Home</MenuItem>*/}
                        {/*<MenuItem eventKey="2">Another action</MenuItem>*/}
                        {/*<MenuItem eventKey="3">Something else here</MenuItem>*/}
                        {/*<MenuItem divider />*/}
                        {/*<MenuItem eventKey="4">Log out</MenuItem>*/}
                    {/*</DropdownButton>*/}
                {/*</ButtonToolbar>*/}
            </nav>
        </div>
    }
}

export default AppTopBar;
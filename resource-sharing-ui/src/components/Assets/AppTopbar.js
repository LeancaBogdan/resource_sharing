import React, {Component} from 'react';
import logoImage from "../../images/logo_bar_2.png";
import "../../css-files/AppTopbar.css";
import {Link} from "react-router-dom";

class AppTopbar extends Component {

    constructor() {
        super();

        this.state = {
            displayMenu: false,
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

    };

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({displayMenu: true}, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu() {
        this.setState({displayMenu: false}, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });

    }


    render() {
        return <div>
            <nav className="navbar navbar-expand-lg navbar-light navbar-default">
                <img className="logo-image" src={logoImage} alt="Resource Sharing"/>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        </li>
                    </ul>
                </div>
                <div className="dropdown">
                    <div className="button" onClick={this.showDropdownMenu}> {this.props.username}</div>

                    {this.state.displayMenu ? (
                            <ul class="dropDownUl">
                                <li class="dropDownLi">
                                    <Link to={"/home"}>
                                        Home
                                    </Link>
                                </li>
                                <li class="dropDownLi">
                                    <Link to={"/loaned-products"}>
                                        Loaned products
                                    </Link>
                                </li>
                                <li className="dropDownLi">
                                    <Link to={"/borrowed-products"}>
                                        Borrowed products
                                    </Link>
                                </li>
                                <li className="dropDownLi">
                                    <Link to={"/my-products"}>
                                        My Products
                                    </Link>
                                </li>
                                <li className="dropDownLi">
                                    <Link to={"/"}>
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        ) :
                        (
                            null
                        )
                    }

                </div>
            </nav>
        </div>
    }
}

export default AppTopbar;
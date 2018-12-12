import React, {Component} from 'react';
import {Route, Router, Switch, Redirect} from "react-router";
import {Provider} from "react-redux";

import LoginPanel from "./components/LoginPanel";
import HomePanel from "./components/HomePanel";
import ErrorPanel from "./components/ErrorPanel";
import LoanedProductsPanel from "./components/LoanedProductsPanel";
import BorrowedProductsPanel from "./components/BorrowedProductsPanel";
import MyProductsPanel from "./components/MyProductsPanel";

class App extends Component {

    render() {

        return <Provider store={this.props.store}>
            <Router history={this.props.history}>
                <Switch>
                    <Route exact path={"/"} render={() => {
                        return <LoginPanel/>
                    }}/>
                    <Route exact path={"/home"} render={() => {
                        return <HomePanel/>
                    }}/>
                    <Route exact path={"/loaned-products"} render={() => {
                        return <LoanedProductsPanel/>
                    }}/>
                    <Route exact path={"/borrowed-products"} render={() => {
                        return <BorrowedProductsPanel/>
                    }}/>
                    <Route exact path={"/my-products"} render={() => {
                        return <MyProductsPanel/>
                    }}/>
                    <Route exact path={"/error"} render={() => {
                        return <ErrorPanel/>
                    }}/>

                </Switch>
            </Router>
        </Provider>
    }
}

export default App;

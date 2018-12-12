import React, {Component} from 'react';
import {Route, Router, Switch, Redirect} from "react-router";
import {Provider} from "react-redux";

import LoginPanel from "./components/LoginPanel";
import HomePanel from "./components/HomePanel";
import ErrorPanel from "./components/ErrorPanel";

class App extends Component {

    render() {
        const currentUser = this.props.store.login;
        return <Provider store={this.props.store}>
            <Router history={this.props.history}>
                <Switch>
                    <Route exact path={"/"} render={() => {
                        return <LoginPanel/>
                    }}/>
                    <Route exact path={"/redirect"} render={() => {
                       // if (currentUser && currentUser.email!=="") {
                            return <Redirect to={"/home"}/>
                       // } else {
                            return <Redirect to={"/error"}/>
                        //}
                    }}/>
                    <Route exact path={"/home"} render={() => {
                        return <HomePanel/>
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

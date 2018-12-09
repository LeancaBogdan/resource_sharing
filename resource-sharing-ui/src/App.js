import React, {Component} from 'react';
import {Route, Router, Switch} from "react-router";
import {Provider} from "react-redux";

import LoginPanel from "./components/LoginPanel";
import HomePanel from "./components/HomePanel";

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
                </Switch>
            </Router>
        </Provider>
    }
}

export default App;

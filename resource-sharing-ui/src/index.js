import React from 'react';
import App from './App';
import {createReduxStore} from "./redux-init";
import {render} from 'react-dom';
import createHistory from 'history/createBrowserHistory';


bootstrapAndDisplayTheMainAppComponent();

function bootstrapAndDisplayTheMainAppComponent() {

    const config = getRuntimeConfiguration();

    const history = createHistory();
    const store = createReduxStore(config, history);

    render(
        <App store={store} history={history}/>,
        document.getElementById('root')
    );
}

function getRuntimeConfiguration() {
    return window.config;
}
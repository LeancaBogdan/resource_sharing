import React from 'react';
import App from './App';
import {createReduxStore} from "./redux-init";
import {render} from 'react-dom'


bootstrapAndDisplayTheMainAppComponent();

function bootstrapAndDisplayTheMainAppComponent() {

    const toInject="";
    const config = getRuntimeConfiguration();

    const store = createReduxStore(config, toInject);

    render(
        <App store={store}/>,
        document.getElementById('root')
    );
}

function getRuntimeConfiguration() {
    return window.config;
}
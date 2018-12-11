import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {reducer as formReducer} from 'redux-form'


import currentLoggedInUser from "./reducers/currentLoggedInUser";
import login from './reducers/login-reducer';

export const createReduxStore = (config, toInject) => {

    const rootReducer = combineReducers({
        login,
        currentLoggedInUser,
        form: formReducer,
    });

    return createStore(rootReducer,
        getDefaultStoreObject(config),
        compose(
            applyMiddleware(thunkMiddleware.withExtraArgument(toInject)),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
};

function getDefaultStoreObject(config) {
    return {
        login: {
            loginInProgress: false,
            loginSuccess: false,
            loginError: undefined,
            loggedInUser: ""
        },
        currentLoggedInUser: undefined
    };
}
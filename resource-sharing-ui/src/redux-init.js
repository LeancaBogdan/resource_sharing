import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {reducer as formReducer} from 'redux-form'

import login from './reducers/login-reducer';
import loanProducts from './reducers/loan-products-reducer';

export const createReduxStore = (config, toInject) => {

    const rootReducer = combineReducers({
        login,
        loanProducts,
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
            loggedInUser: {
                email: "",
                firstName: "",
                lastName: "",
                role: undefined,
                userId: undefined
            }
        },
        loanProducts:{
            loadInProgress: false,
            loadError: undefined,
            products: []
        }
    };
}
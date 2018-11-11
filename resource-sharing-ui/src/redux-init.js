import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {reducer as formReducer} from 'redux-form'
import userAuthState from "./reducers/userAuthState";

export const createReduxStore = (config, toInject) => {

    const rootReducer = combineReducers({
        userAuthState: (state, action) => userAuthState(state, action),
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
        blabla: "",
        userAuthState: {
            loggedInUser: "",
            userId: 0
        }
    };
}
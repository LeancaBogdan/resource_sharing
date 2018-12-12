import {
    LOGIN_ERROR,
    LOGIN_START,
    LOGIN_SUCCESS
} from "../actions/login-actions";

const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_START:
            return loginStart(state, action);
        case LOGIN_SUCCESS:
            return loginSuccess(state, action);
        case LOGIN_ERROR:
            return loginError(state, action);
        default:
            return state;
    }
};

const loginStart = (state, action) => {
    return {
        ...state,
        loginInProgress: true
    }
};

const loginSuccess = (state, action) => {
    console.log(state, action);
    return {
        ...state,
        loginInProgress: false,
        loggedInUser: action.user
    }
};

const loginError = (state, action) => {
    return {
        ...state,
        loginInProgress: false,
        loginError: action.error
    }
};

export default loginReducer;
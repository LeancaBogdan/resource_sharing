import {
    LOGIN_START,
    LOGIN_SUCCESS
} from "../actions/login-actions";

const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_START:
            return loginStart(state, action);
        case LOGIN_SUCCESS:
            return loginSuccess(state, action);
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
    return {
        ...state,
        loggedInUser: action.email
    }
};

export default loginReducer;
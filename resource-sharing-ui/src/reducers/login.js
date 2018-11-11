import {LOGIN_PAGE_MOUNTED} from "../actions/general";

export const handleLoginActions = (state = {}, action, injected) => {
    switch (action.type) {
        case LOGIN_PAGE_MOUNTED:
            return loginPageMounted(state, action);
        default:
            return state;
    }
};

const loginPageMounted = (state, action) => {
    return {
        ...state,
        loggedInUser: action.currentUser,
        userId: action.userId
    }
};
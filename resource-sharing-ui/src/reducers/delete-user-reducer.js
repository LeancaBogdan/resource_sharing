import {
    DELETE_USER_ERROR,
    DELETE_USER_SUCCESS,
    DELETE_USER_START
} from "../actions/delete-user-actions"

const deleteUserReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_USER_START:
            return deleteuserStart(state, action);
        case DELETE_USER_SUCCESS:
            return deleteuserSuccess(state, action);
        case DELETE_USER_ERROR:
            return deleteuserError(state, action);
        default:
            return state;
    }
};

const deleteuserStart = (state, action) => {
    return {
        ...state,
        deleteUserInProgress: true
    }
};

const deleteuserSuccess = (state, action) => {
    return {
        ...state,
        deleteUserInProgress: false
    }
};

const deleteuserError = (state, action) => {
    return {
        ...state,
        deleteUserInProgress: false,
        deleteUserError: action.error
    }
};

export default deleteUserReducer;


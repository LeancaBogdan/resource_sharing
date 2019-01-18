import {
    CREATE_ADMIN_ERROR,
    CREATE_ADMIN_SUCCESS,
    CREATE_ADMIN_START
} from "../actions/create-admin-actions"

const createAdminReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_ADMIN_START:
            createAdminStart(state, action);
        case CREATE_ADMIN_SUCCESS:
            createAdminSuccess(state, action);
        case CREATE_ADMIN_ERROR:
            createAdminError(state, action);
        default:
            return state;
    }
};

const createAdminStart = (state, action) => {
    return {
        ...state,
        createAdminInProgress: true
    }
};

const createAdminSuccess = (state, action) => {
    return {
        ...state,
        createAdminInProgress: false,
    }
};

const createAdminError = (state, action) => {
    return {
        ...state,
        createAdminInProgress: false,
        createAdminError: action.error
    }
};

export default createAdminReducer;
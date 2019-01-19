import {
    EDIT_PRODUCT_START,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_ERROR
} from "../actions/edit-product-actions"


const editProductReducer = (state = {}, action) => {
    switch (action.type) {
        case EDIT_PRODUCT_START:
            return editProductStart(state, action);
        case EDIT_PRODUCT_SUCCESS:
            return editProductSuccess(state, action);
        case EDIT_PRODUCT_ERROR:
            return editProductError(state, action);
        default:
            return state;
    }
};

const editProductStart = (state, action) => {
    return {
        ...state,
        editProductInProgress: true
    }
};

const editProductSuccess = (state, action) => {
    return{
        ...state,
        editProductInProgress: false
    }
};

const editProductError = (state, action) => {
    return{
        ...state,
        editProductInProgress: false,
        editProductError: action.error
    }
};

export default editProductReducer;
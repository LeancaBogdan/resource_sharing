import {
    ADD_PRODUCT_START,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR
} from "../actions/add-product-actions"

const addProductReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_PRODUCT_START:
            return addProductStart(state, action);
        case ADD_PRODUCT_SUCCESS:
            return addProductSuccess(state, action);
        case ADD_PRODUCT_ERROR:
            return addProductError(state, action);
        default:
            return state;
    }
};

const addProductStart = (state, action) => {
    return {
        ...state,
        addProductInProgress: true
    }
};

const addProductSuccess = (state, action) => {
    return{
        ...state,
        addProductInProgress: false
    }
};

const addProductError = (state, action) => {
    return{
        ...state,
        addProductInProgress: false,
        addProductError: action.error
    }
};

export default addProductReducer;
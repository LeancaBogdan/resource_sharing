import {
    DELETE_PRODUCT_START,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_ERROR
} from "../actions/delete-product-actions"
import addProductReducer from "./add-product-reducer";

const deleteProductReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_PRODUCT_START:
            return deleteProductStart(state, action);
        case DELETE_PRODUCT_SUCCESS:
            return deleteProductSuccess(state, action);
        case DELETE_PRODUCT_ERROR:
            return deleteProductError(state, action);
        default:
            return state;
    }
};

const deleteProductStart = (state, action) => {
    return {
        ...state,
        deleteProductInProgress: true
    }
};

const deleteProductSuccess = (state, action) => {
    return{
        ...state,
        deleteProductInProgress: false
    }
};

const deleteProductError = (state, action) => {
    return{
        ...state,
        deleteProductInProgress: false,
        deleteProductError: action.error
    }
};

export default deleteProductReducer;
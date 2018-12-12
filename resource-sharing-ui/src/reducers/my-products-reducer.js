import {
    MY_PRODUCTS_LOAD_START,
    MY_PRODUCTS_LOAD_SUCCESS,
    MY_PRODUCTS_LOAD_ERROR
} from '../actions/my-products-actions';

const myProductsReducer = (state = {}, action) => {
    switch (action.type) {
        case MY_PRODUCTS_LOAD_START:
            return myProductsLoadStart(state, action);
        case MY_PRODUCTS_LOAD_SUCCESS:
            return myProductsLoadSuccess(state, action);
        case MY_PRODUCTS_LOAD_ERROR:
            return myProductsLoadError(state, action);
        default:
            return state;
    }
};

const myProductsLoadStart = (state, action) => {
    return {
        ...state,
        loadInProgress: true,
        loadError: undefined
    }
};

const myProductsLoadSuccess = (state, action) => {
    return {
        ...state,
        loadInProgress: false,
        products: action.products
    }
};

export const myProductsLoadError = (state, action) => {
    return {
        ...state,
        loadInProgress: false,
        loadError: action.error
    }
};

export default myProductsReducer;
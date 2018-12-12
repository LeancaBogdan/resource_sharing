import {
    LOAN_PRODUCTS_LOAD_START,
    LOAN_PRODUCTS_LOAD_SUCCESS,
    LOAN_PRODUCTS_LOAD_ERROR
} from '../actions/loan-products-actions';

const loanProductsReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAN_PRODUCTS_LOAD_START:
            return loanProductsLoadStart(state, action);
        case LOAN_PRODUCTS_LOAD_SUCCESS:
            return loanProductsLoadSuccess(state, action);
        case LOAN_PRODUCTS_LOAD_ERROR:
            return loanProductsLoadError(state, action);
        default:
            return state;
    }
};

const loanProductsLoadStart = (state, action) => {
    return {
        ...state,
        loadInProgress: true,
        loadError: undefined
    }
};

const loanProductsLoadSuccess = (state, action) => {
    return {
        ...state,
        loadInProgress: false,
        products: action.products
    }
};

export const loanProductsLoadError = (state, action) => {
    return {
        ...state,
        loadInProgress: false,
        loadError: action.error
    }
};

export default loanProductsReducer;
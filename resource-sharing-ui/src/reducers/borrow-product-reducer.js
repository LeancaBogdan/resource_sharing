import {
    BORROW_PRODUCT_START,
    BORROW_PRODUCT_SUCCESS,
    BORROW_PRODUCT_ERROR
} from "../actions/borrow-product-actions";

const borrowProductReducer = (state = {}, action) => {
    switch (action.type) {
        case BORROW_PRODUCT_START:
            return borrowProductStart(state, action);
        case BORROW_PRODUCT_SUCCESS:
            return borrowProductSuccess(state, action);
        case BORROW_PRODUCT_ERROR:
            return borrowProductError(state, action);
        default:
            return state;
    }
};

const borrowProductStart = (state, action) => {
    return {
        ...state,
        borrowInProgress: true,
        borrowError: false
    }
};

const borrowProductSuccess = (state, action) => {
    return {
        ...state,
        borrowInProgress: false,
        borrowSuccess: true
    }
};

const borrowProductError = (state, action) => {
    return {
        ...state,
        borrowInProgress: false,
        borrowError: action.error
    }
};

export default borrowProductReducer;
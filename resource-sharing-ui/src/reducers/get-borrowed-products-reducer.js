import{
    GET_BORROWED_PRODUCTS_START,
    GET_BORROWED_PRODUCTS_SUCCESS,
    GET_BORROWED_PRODUCTS_ERROR
} from '../actions/get-borrowed-products-actions'

const getBorrowedProductsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_BORROWED_PRODUCTS_START:
            return getBorrowedProductsStart(state, action);
        case GET_BORROWED_PRODUCTS_SUCCESS:
            return getBorrowedProductsSuccess(state, action);
        case GET_BORROWED_PRODUCTS_ERROR:
            return getBorrowedProductsError(state, action);
        default:
            return state;
    }
};

const getBorrowedProductsStart = (state, action) => {
    return {
        ...state,
        getBorrowedProductsInProgress: true
    }
};

const getBorrowedProductsSuccess = (state, action) => {
    return {
        ...state,
        getBorrowedProductsInProgress: false,
        getBorrowedProductsSuccess: true,
        products: action.products
    }
};

const getBorrowedProductsError = (state, action) => {
    return {
        ...state,
        getBorrowedProductsInProgress: false,
        getBorrowedProductsError: action.error
    }
};

export default getBorrowedProductsReducer;
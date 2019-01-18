import {
    SEARCH_PRODUCT_ERROR,
    SEARCH_PRODUCT_START,
    SEARCH_PRODUCT_SUCCESS
} from "../actions/search-product-actions"

const searchProductReducer = (state = {}, action) => {
    switch (action.type) {
        case SEARCH_PRODUCT_START:
            return searchProductStart(state, action);
        case SEARCH_PRODUCT_SUCCESS:
            return searchProductSuccess(state, action);
        case SEARCH_PRODUCT_ERROR:
            return searchProductError(state, action);
        default:
            return state;
    }

};

const searchProductStart = (state, action) => {
    return {
        ...state,
        searchProductInProgress: true,
    }
};

const searchProductSuccess = (state, action) => {
    return {
        ...state,
        searchProductInProgress: false,
        products: action.products
    }
};

const searchProductError = (state, action) => {
    return {
        ...state,
        searchProductInProgress: false,
        searchProductError: action.error
    }
};

export default searchProductReducer;
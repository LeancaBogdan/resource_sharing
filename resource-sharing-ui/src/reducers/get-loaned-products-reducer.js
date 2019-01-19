import {
    GET_LOANED_PRODUCTS_START,
    GET_LOANED_PRODUCTS_SUCCESS,
    GET_LOANED_PRODUCTS_ERROR
} from '../actions/get-loaned-products-actions'

const getLoanedProductsReducer = (state = {}, action) => {
  switch (action.type) {
      case GET_LOANED_PRODUCTS_START:
          return getLoanedProductsStart(state, action);
      case GET_LOANED_PRODUCTS_SUCCESS:
          return getLoanedProductsSuccess(state, action);
      case GET_LOANED_PRODUCTS_ERROR:
          return getLoanedProductsError(state, action);
      default:
          return state;
  }
};

const getLoanedProductsStart = (state, action) => {
    return {
        ...state,
        getLoanedProductsInProgress: true
    }
};

const getLoanedProductsSuccess = (state, action) => {
    return {
        ...state,
        getLoanedProductsInProgress: false,
        getLoanedProductsSuccess: true,
        products: action.products
    }
};

const getLoanedProductsError = (state, action) => {
    return {
        ...state,
        getLoanedProductsInProgress: false,
        getLoanedProductsError: action.error
    }
};

export default getLoanedProductsReducer;
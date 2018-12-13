import GetLoanedProductsService from "../service/GetLoanedProductsService";

export const GET_LOANED_PRODUCTS_START = "GET_LOANED_PRODUCTS_START";
export const GET_LOANED_PRODUCTS_SUCCESS = "GET_LOANED_PRODUCTS_SUCCESS";
export const GET_LOANED_PRODUCTS_ERROR = "GET_LOANED_PRODUCTS_ERROR";

export const getLoanedProductsStart = () => ({
   type: GET_LOANED_PRODUCTS_START
});

export const getLoanedProductsSuccess = (products) => ({
    type: GET_LOANED_PRODUCTS_SUCCESS,
    products: products
});

export const getLoanedProductError = (error) => ({
   type: GET_LOANED_PRODUCTS_ERROR,
   error: error
});

export const getLoanedProductThunk = (userId) => {
    return function (dispatch, getState, injected){
        dispatch(getLoanedProductsStart());

        GetLoanedProductsService.getLoanedProducts(userId)
            .then(data => {
               data.json().then(products => {
                   dispatch(getLoanedProductsSuccess(products))
               });
            })
            .catch(error => {
               dispatch(getLoanedProductError(error))
            });
    }
};
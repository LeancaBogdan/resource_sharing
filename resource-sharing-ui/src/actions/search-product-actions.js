import LoanProductService from "../service/LoanProductsService";

export const SEARCH_PRODUCT_START = "SEARCH_PRODUCT_START";
export const SEARCH_PRODUCT_SUCCESS = "SEARCH_PRODUCT_SUCCESS";
export const SEARCH_PRODUCT_ERROR = "SEARCH_PRODUCT_ERROR";

export const searchProductStart = () => ({
    type: SEARCH_PRODUCT_START
});

export const searchProductSuccess = (products) => ({
    type: SEARCH_PRODUCT_START,
    products: products
});

export const searchProductError = (error) => ({
    type: SEARCH_PRODUCT_ERROR,
    error: error
});

export const searchProductThunk = (name) => {
    return function (dispatch, getState, injected) {
        dispatch(searchProductStart());

        LoanProductService.getToLoanProducts()
            .then(data => {
                data.json().then(products => {
                    let productsList = [];
                    products.forEach((currentProduct) => {
                        if (currentProduct.name === name) {
                            productsList.push(currentProduct);
                        }
                    });

                    dispatch(searchProductSuccess(productsList));
                });
            })
            .catch(error => {
                dispatch(searchProductError(error))
            });
    }
};






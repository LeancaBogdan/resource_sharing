import LoanProductsService from "../service/LoanProductsService";

export const MY_PRODUCTS_LOAD_START = "MY_PRODUCTS_LOAD_START";
export const MY_PRODUCTS_LOAD_SUCCESS = "MY_PRODUCTS_LOAD_SUCCESS";
export const MY_PRODUCTS_LOAD_ERROR = "MY_PRODUCTS_LOAD_ERROR";


export const myProductsLoadStart = () => ({
    type: MY_PRODUCTS_LOAD_START
});

export const myProductsLoadSuccess = (products) => ({
    type: MY_PRODUCTS_LOAD_SUCCESS,
    products
});

export const myProductsLoadError = (error) => ({
    type: MY_PRODUCTS_LOAD_ERROR,
    error
});


export const myProductsMountedThunk = (email) => {
    return function (dispatch, getState, injected) {
        dispatch(myProductsLoadStart());

        LoanProductsService.getToLoanProducts().then(data => {
            data.json().then(products => {
                let myProductsList=[];
                products.forEach((currentProduct) => {
                    if (currentProduct.owner.email === email) {
                        myProductsList.push(currentProduct);
                    }
                });
                dispatch(myProductsLoadSuccess(myProductsList))
            });
        }).catch(error => {
            dispatch(myProductsLoadError(error))
        });
    }
};
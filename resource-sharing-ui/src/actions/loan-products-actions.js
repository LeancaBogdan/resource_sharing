import LoanProductsService from "../service/LoanProductsService";

export const LOAN_PRODUCTS_LOAD_START = "LOAN_PRODUCTS_LOAD_START";
export const LOAN_PRODUCTS_LOAD_SUCCESS = "LOAN_PRODUCTS_LOAD_SUCCESS";
export const LOAN_PRODUCTS_LOAD_ERROR = "LOAN_PRODUCTS_LOAD_ERROR";


export const loanProductsLoadStart = () => ({
    type: LOAN_PRODUCTS_LOAD_START
});

export const loanProductsLoadSuccess = (products) => ({
    type: LOAN_PRODUCTS_LOAD_SUCCESS,
    products
});

export const loanProductsLoadError = (error) => ({
    type: LOAN_PRODUCTS_LOAD_ERROR,
    error
});


export const loanProductsMountedThunk = () => {
    return function (dispatch, getState, injected) {
        dispatch(loanProductsLoadStart());

        LoanProductsService.getToLoanProducts().then(data => {
            data.json().then(products => {
                dispatch(loanProductsLoadSuccess(products))
            });
        }).catch(error => {
            dispatch(loanProductsLoadError(error))
        });
    }
};
import BorrowProductService from "../service/BorrowProductService";

export const BORROW_PRODUCT_START = "BORROW_PRODUCT_START";
export const BORROW_PRODUCT_SUCCESS = "BORROW_PRODUCT_SUCCESS";
export const BORROW_PRODUCT_ERROR = "BORROW_PRODUCT_ERROR";


export const borrowProductStart = () => ({
    type: BORROW_PRODUCT_START
});

export const borrowProductSuccess = () => ({
    type: BORROW_PRODUCT_SUCCESS
});

export const borrowProductError = (error) => ({
    type: BORROW_PRODUCT_ERROR,
    error: error
});


export const borrowProductThunk = (fromUser, toUser, borrowDate, returnDate, productId) => {
    return function (dispatch, getState, injected) {
        dispatch(borrowProductStart());

        BorrowProductService.borrowProduct(fromUser, toUser, borrowDate, returnDate, productId).then(data => {
            data.json().then(data => {
                dispatch(borrowProductSuccess())
            });
        }).catch(error => {
            dispatch(borrowProductError(error))
        });
    }
}
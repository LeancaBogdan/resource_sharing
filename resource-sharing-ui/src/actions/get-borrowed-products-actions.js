import GetBorrowedProductsService from "../service/GetBorrowedProductsService";

export const GET_BORROWED_PRODUCTS_START = "GET_BORROWED_PRODUCTS_START";
export const GET_BORROWED_PRODUCTS_SUCCESS = "GET_BORROWED_PRODUCTS_SUCCESS";
export const GET_BORROWED_PRODUCTS_ERROR = "GET_BORROWED_PRODUCTS_ERROR";

export const getBorrowedProductsStart = () => ({
   type: GET_BORROWED_PRODUCTS_START
});

export const getBorrowedProductsSuccess = (products) => (
    {
        type: GET_BORROWED_PRODUCTS_SUCCESS,
        products: products
    }
);

export const getBorrowedProductsError = (error) => ({
        type:GET_BORROWED_PRODUCTS_ERROR,
        error: error
    }
);

export const getBorrowedProductsThunk = (userId) => {
    return function (dispatch, getState, injected) {
        dispatch(getBorrowedProductsStart());

        GetBorrowedProductsService.getBorrowProducts(userId)
            .then(data => {
               data.json().then(products => {
                   dispatch(getBorrowedProductsSuccess(products))
               });

            })
            .catch(error => {
                dispatch(getBorrowedProductsError(error))
            });
    }
};
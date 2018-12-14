import EditProductService from "../service/EditProductService";

export const EDIT_PRODUCT_START = "EDIT_PRODUCT_START";
export const EDIT_PRODUCT_SUCCESS = "EDIT_PRODUCT_SUCCESS";
export const EDIT_PRODUCT_ERROR = "EDIT_PRODUCT_ERROR";

export const editProductStart = () => ({
    type: EDIT_PRODUCT_START
});

export const editProductSuccess = () => ({
    type: EDIT_PRODUCT_SUCCESS
});

export const editProductError = (error) => ({
    type: EDIT_PRODUCT_ERROR,
    error: error
});

export const editProductThunk = (name, description, price, isActive, productId) => {
    return function (dispatch, getState, injected) {
        dispatch(editProductStart());

        EditProductService.editProduct(name, description, price, isActive, productId)
            .then(() => dispatch(editProductSuccess()))
            .catch(error => {
                dispatch(editProductError(error))
            });
    }
};
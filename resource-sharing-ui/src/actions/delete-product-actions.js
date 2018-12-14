import DeleteProductService from "../service/DeleteProductService";

export const DELETE_PRODUCT_START = "DELETE_PRODUCT_START";
export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_ERROR = "DELETE_PRODUCT_ERROR";

export const deleteProductStart = () => ({
    type: DELETE_PRODUCT_START
});

export const deleteProductSuccess = () => ({
    type: DELETE_PRODUCT_SUCCESS
});

export const deleteProductError = (error) => ({
    type: DELETE_PRODUCT_ERROR,
    error: error
});

export const deleteProductThunk = (productId) => {
    return function (dispatch, getState, injected) {
        dispatch(deleteProductStart());

        DeleteProductService.deleteProduct(productId)
            .then(() => dispatch(deleteProductSuccess()))
            .catch(error => {
               dispatch(deleteProductError(error))
            });
    }
};


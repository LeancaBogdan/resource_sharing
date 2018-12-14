import AddProductService from "../service/AddProductService";

export const ADD_PRODUCT_START = "ADD_PRODUCT_START";
export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
export const ADD_PRODUCT_ERROR = "ADD_PRODUCT_ERROR";

export const addProductStart = () => ({
   type: ADD_PRODUCT_START
});

export const addProductSuccess = () => ({
   type: ADD_PRODUCT_SUCCESS
});

export const addProductError = (error) => ({
    type: ADD_PRODUCT_ERROR,
    error: error
});

export const addProductThunk = (name, description, price, isActive, userId) => {
    return function (dispatch, getState, injected) {
        dispatch(addProductStart());

        AddProductService.addProduct(name, description, price, isActive, userId)
            .then(() => dispatch(addProductSuccess()))
            .catch(error => {
                dispatch(addProductError(error))
            });
    }
};

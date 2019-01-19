import RegisterService from "../service/RegisterService";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const registerStart = () => ({
   type: REGISTER_START
});

export const registerSuccess = () => ({
   type: REGISTER_SUCCESS
});

export const registerError = (error) => ({
   type: REGISTER_ERROR,
    error: error
});

export const registerThunk = (firstName, lastName, email, password) => {
    return function (dispatch, getState, injected) {
        dispatch(registerStart());

        RegisterService.register(firstName, lastName, email, password)
            .then(() => dispatch(registerSuccess()))
            .catch(error => {
               dispatch(registerError(error))
            });
    }
};

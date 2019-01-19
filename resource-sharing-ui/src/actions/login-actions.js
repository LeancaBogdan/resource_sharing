import LoginService from "../service/LoginService";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const loginStart = () => ({
    type: LOGIN_START
});

export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    user: user
});

export const loginError = (error) => ({
    type: LOGIN_ERROR,
    error: error
});

export const loginThunk = (email, password) => {
    return function (dispatch, getState, injected) {

        dispatch(loginStart());

        LoginService.login(email, password).then(data => {
            data.json().then(userData => {
                dispatch(loginSuccess(userData))
            });
        }).catch(error => {
            dispatch(loginError(error))
        });
    }
};
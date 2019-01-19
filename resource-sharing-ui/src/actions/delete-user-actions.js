import DeleteUserService from "../service/DeleteUserService";

export const DELETE_USER_START = "DELETE_USER_START";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_ERROR = "DELETE_USER_ERROR";

export const deleteUserStart = () => ({
   type: DELETE_USER_START
});

export const deleteUserSuccess = () => ({
    type: DELETE_USER_SUCCESS,
});

export const deleteUserError = (error) => ({
    type: DELETE_USER_ERROR,
    error: error
});

export const deleteUserThunk = (userId) => {
    return function (dispatch, getState, injected) {
        dispatch(deleteUserStart());

        DeleteUserService.deleteUser(userId)
            .then(() => dispatch(deleteUserSuccess()))
            .catch(error => {
                dispatch(deleteUserError(error))
            });
    }
};

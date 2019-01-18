import CreateAdminService from "../service/CreateAdminService";

export const CREATE_ADMIN_START = "CREATE_ADMIN_START";
export const CREATE_ADMIN_SUCCESS = "CREATE_ADMIN_SUCCESS";
export const CREATE_ADMIN_ERROR = "CREATE_ADMIN_ERROR";

export const createAdminStart = () => ({
   type: CREATE_ADMIN_START
});

export const createAdminSuccess = () => ({
   type: CREATE_ADMIN_SUCCESS
});

export const createAdminError = (error) => ({
    type: CREATE_ADMIN_ERROR,
    error: error
});

export const createAdminThunk = (userId) => {
    return function (dispatch, getState, injected) {
        dispatch(createAdminStart());

        CreateAdminService.createAdmin(userId)
            .then(() => dispatch(createAdminStart()))
            .catch(error => {
               dispatch(createAdminError(error))
            });
    }
};
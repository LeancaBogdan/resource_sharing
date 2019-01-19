import LoadUsersService from "../service/LoadUsersService";

export const LOAD_USERS_START = "LOAD_USERS_START";
export const LOAD_USERS_SUCCESS = "LOAD_USERS_SUCCESS";
export const LOAD_USERS_ERROR = "LOAD_USERS_ERROR";

export const loadUsersStart = () => ({
   type: LOAD_USERS_START
});

export const loadUsersSuccess = (users) => ({
    type: LOAD_USERS_SUCCESS,
    users: users
});

export const loadUsersError = (error) => ({
    type: LOAD_USERS_ERROR,
    error: error
});

export const loadUsersMountedThunk = () => {
  return function (dispatch, getState, injected) {
      dispatch(loadUsersStart());

      LoadUsersService.getToLoanUsers().then(data => {
         data.json().then(users => {
             dispatch(loadUsersSuccess(users))
         })
      }).catch(error => {
          dispatch(loadUsersError(error))
      });
  }
};
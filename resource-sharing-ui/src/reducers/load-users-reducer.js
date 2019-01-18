import {
    LOAD_USERS_ERROR,
    LOAD_USERS_START,
    LOAD_USERS_SUCCESS
} from "../actions/load-users-actions"

const loadUsersReducer = (state = {}, action) => {
  switch (action.type){
      case LOAD_USERS_START:
          return loadUsersStart(state, action);
      case LOAD_USERS_SUCCESS:
          return loadUsersSuccess(state, action);
      case LOAD_USERS_ERROR:
          return loadUsersError(state, action);
      default:
          return state;
  }
};

const loadUsersStart = (state, action) => {
  return {
      ...state,
      loadInProgress: true,
      loadError: undefined
  }
};

const loadUsersSuccess = (state, action) => {
    return {
        ...state,
        loadInProgress: false,
        users: action.users
    }
};

const loadUsersError = (state, action) => {
  return {
      ...state,
      loadInProgress: false,
      loadError: action.error
  }
};


export default loadUsersReducer;
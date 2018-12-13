import {
    REGISTER_ERROR,
    REGISTER_SUCCESS,
    REGISTER_START
} from "../actions/register-actions";

const registerReducer = (state = {}, action) => {
  switch (action.type) {
      case REGISTER_START:
          return registerStart(state, action);
      case REGISTER_SUCCESS:
          return registerSuccess(state, action);
      case REGISTER_ERROR:
          return registerError(state, action);
      default:
          return state;
  }
};

const registerStart = (state, action) => {
  return{
      ...state,
      registerInProgress: true
  }
};

const registerSuccess = (state, action) => {
  return {
      ...state,
      registerInProgress: false
  }
};

const registerError = (state, action) => {
    return {
        ...state,
        registerInProgress: false,
        registerError: action.error
    }
};

export default registerReducer;

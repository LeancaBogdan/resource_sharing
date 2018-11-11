import {handleLoginActions} from "./login";

export const userAuthState = (state = {}, action, injected) => {
    let newState = handleLoginActions(state, action, injected);
    //newState = ...
    return newState;
};

export default userAuthState;
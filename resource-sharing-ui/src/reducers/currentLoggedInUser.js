import {HOME_PAGE_MOUNTED} from "../actions/general";

const currentLoggedInUser = (state = {}, action) => {
    switch (action.type) {
        case HOME_PAGE_MOUNTED:
            return {
                ...action.currentLoggedInUser
            };
        default:
            return state;
    }
};

export default currentLoggedInUser;
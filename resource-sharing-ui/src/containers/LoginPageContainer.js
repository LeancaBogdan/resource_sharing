import {loginPageMounted} from "../actions/general";
import {connect} from "react-redux";
import LoginPanel from "../components/LoginPanel";

const mapStateToProps = (state) => {
    return {
        loggedInUser: state.userAuthState.loggedInUser,
        userId: state.userAuthState.userId
    }
};

const mapDispatchToProps = dispatch => ({
    clickButton: (user, userId) => dispatch(loginPageMounted(user, userId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPanel);
import React, {Component} from 'react';
import LoginTopbar from "./LoginTopBar";
import WelcomePageBodyPanel from "./WelcomePageBodyPanel";

class LoginPanel extends Component {
    render(){
        return <div>
            <LoginTopbar/>
            <WelcomePageBodyPanel/>
        </div>
    }
}

export default LoginPanel;

import React, {Component} from 'react';
import './App.css';
import LoginPageContainer from "./containers/LoginPageContainer";

class App extends Component {


    render() {
        return (
            <div>
                <LoginPageContainer store={this.props.store}/>
            </div>
        );
    }
}

export default App;

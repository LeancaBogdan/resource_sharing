import React, {Component} from "react";
import "../css-files/WelcomePageBodyPanel.css";

class WelcomePageBodyPanel extends Component {
    render() {
        return <div>
            <div className="row" style={{"height": "0px"}}>
                <div className="col-sm-4 sign-in-button-area" style={{"borderColor": "red"}}>
                    <button className="btn btn-default" styles={{"backgroundColor": "red"}}> Sign In </button>
                </div>
                <div className="col-sm-8 sign-in-formular" style={{"borderColor": "blue"}}>
                    Formular in progress...
                </div>
            </div>
        </div>
    }
}

export default WelcomePageBodyPanel;
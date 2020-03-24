import React, { Component } from "react";
import { connect } from "react-redux";
import { setSessionName } from "../../../actions/sessionActions";

const mapDispatchToProps = dispatch => {
    return {
      setSessionName: name => dispatch(setSessionName(name))
    }
}

class SessionNameInput extends Component {
    render() {
        return(
            <div className="input">
            <span className="inputName">{this.props.lable}</span>
            <input 
                className="inputInline" 
                type='text' 
                value={this.props.inputValue} 
                onChange={value => this.props.setSessionName(value.target.value)}
            />
        </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(SessionNameInput);
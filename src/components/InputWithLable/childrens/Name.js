import React, { Component } from "react";
import { connect } from "react-redux";
import { setUsername } from '../../../actions/userActions';

const mapDispatchToProps = dispatch => {
    return {
      setUsername: name => dispatch(setUsername(name))
    }
}

class NameInput extends Component {
    render() {
        return(
            <div className="input">
            <span className="inputName">{this.props.lable}</span>
            <input 
                className="inputInline" 
                type='text' 
                value={this.props.inputValue} 
                onChange={value => this.props.setUsername(value.target.value)}
            />
        </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(NameInput);
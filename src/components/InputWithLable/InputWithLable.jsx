import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';
import { setUsername } from '../../actions/userActions';
import { setComment } from '../../actions/surveyActions';


const mapDispatchToProps = dispatch => {
    return {
      setUsername: name => dispatch(setUsername(name)),
      setComment: comment => dispatch(setComment(comment))
    }
}

class InputWithLable extends Component {
    render(){
        return(
            <div className="input">
                <span className="inputName">{this.props.lable}</span>
                {this.props.inline && 
                    <input 
                        className="inputInline" 
                        type='text' 
                        value={this.props.inputValue} 
                        onChange={value => this.props.setUsername(value.target.value)}
                    />
                }
        
                {!this.props.inline && 
                    <textarea 
                        className="inputNotInline" 
                        name='comment' 
                        cols="30" 
                        rows="5" 
                        value={this.props.inputValue}
                        onChange={value => this.props.setComment(value.target.value)}
                    />
                }
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(InputWithLable);
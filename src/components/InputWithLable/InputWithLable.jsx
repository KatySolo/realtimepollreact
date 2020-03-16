import React, { Component } from 'react';
import './styles.css';

export class InputWithLable extends Component {
    render(){
        return(
            <div className="input">
                <span className="inputName">{this.props.lable}</span>
                {this.props.inline && 
                    <input className="inputInline" type='text' value={this.props.inputValue}/>
                }
                {!this.props.inline && 
                    <textarea className="inputNotInline" name='comment' cols="30" rows="5" value={this.props.inputValue}/>
                }
            </div>
        );
    }
}
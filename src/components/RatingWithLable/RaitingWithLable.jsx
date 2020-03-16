import React, { Component } from 'react'
import './styles.css';

export class RatingWithLable extends Component {
    render(){
        return (
            <div className="rating">
                <span className="ratingName">{this.props.lable}</span>
                <input 
                    className="ratingInput" 
                    placeholder='5' 
                    type='number' 
                    min='1' 
                    max='10' 
                    value={this.props.inputValue} 
                />
            </div>
        );
    }
}
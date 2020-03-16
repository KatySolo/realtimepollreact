import React from 'react';

export const RaitingTemplate = (props) => {
    return (
        <div className="rating">
            <span className="ratingName" id={props.id}>{props.lable}</span>
            <input 
                className="ratingInput" 
                placeholder='5' 
                type='number' 
                min='1' 
                max='10' 
                value={props.inputValue} 
                onChange={value => props.handleValue(value.target.value)}
            />
        </div>
    )
}


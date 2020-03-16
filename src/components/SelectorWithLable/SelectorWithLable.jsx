import React, { Component } from 'react';
import './styles.css'

export class SelectorWithLable extends Component {
    render() {
        // console.log(this.props);
        return(
            <div className='selectorContainer'>
            <span className='selectorName'>{this.props.lable}</span>
            {this.props.options === undefined && <span className='loadingMsg'>Загрузка...</span>}
            {this.props.options !== undefined && 
            <select className='selector'>
                {this.props.options !== undefined && this.props.options.map(option => { return (
                    <option value={option.id}>{option.name}</option>
                )})}
            </select>}
            </div>
        );
    }
}
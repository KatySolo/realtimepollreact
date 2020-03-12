import React, { Component } from 'react';
import './styles.css'

export class SubmitButton extends Component {
    render() {
        return(
            <div className='buttonContainer'>
                <button className='submitButton' type="submit">{this.props.text || 'Отправить'}</button>
            </div>
        );
    }
}
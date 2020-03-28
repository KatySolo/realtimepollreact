import React, { Component } from 'react';
import './styles.css';

export default class SubmitButton extends Component {
	render() {
		return(
			<div className='buttonContainer'>
				<button 
					className='submitButton' 
					type="submit" 
					disabled={!this.props.isValid()}
					onClick={() => this.props.handleSubmit()}>
					{this.props.text || 'Отправить'}
				</button>
			</div>
		);
	}
}

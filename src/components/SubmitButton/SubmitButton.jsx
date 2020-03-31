import React from 'react';
import './styles.css';

/**
 * Functional component for submit button
 */
export default function SubmitButton(props) {
	return (
		<div className='buttonContainer'>
			<button
				className='submitButton'
				type="submit"
				disabled={!props.isValid()}
				onClick={() => props.handleSubmit()}>
				{props.text || 'Отправить'}
			</button>
		</div>
	);
}

import React from 'react';
import './styles.css';
import { FunctionalParticle } from '../FunctionalParticle';
import PropTypes from 'prop-types';

/**
 * Кнопка для отправки формы
 *
 *@component
 */
class SubmitButton extends FunctionalParticle {
	constructor(props) {
		super(props, 'button', 'submit');
	}

	render() {
		return (
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

SubmitButton.propTypes = {
	/**
	 * Надпись кнопки
	 */
	text: PropTypes.string,

	/**
	 * Валидатор формы
	 */
	isValid: PropTypes.func,

	/**
	 * Обработчик отправки формы
	 */
	handleSubmit: PropTypes.func,
};

export default SubmitButton;

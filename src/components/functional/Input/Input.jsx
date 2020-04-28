import React from 'react';
import './styles.css';
import { FunctionalParticle } from '../FunctionalParticle';
import PropTypes from 'prop-types';

/**
 * Компонент ввода текста с названием
 *
 * @component
 */
class Input extends FunctionalParticle {
	constructor(props) {
		super(props, 'textInput', props.id);
	}

	render(){
		if (this.props.type === 'block'){
			return (
				<div className={'input ' + this.props.id}>
					<span className="inputName">{this.props.label}</span>
					<textarea
						className="inputNotInline"
						name={this.props.id}
						cols="30"
						rows="5"
						value={this.props.inputValue}
						onChange={value => this.props.handleInput(this.props.id, value.target.value)}
					/>
				</div>
			);
		}

		return (
			<div className={'input ' + this.props.id}>
				<div className="inputName">{this.props.label}</div>
				<input
					className="inputInline"
					type='text'
					value={this.props.inputValue}
					onChange={value => this.props.handleInput(this.props.id, value.target.value)}
				/>
			</div>

		);
	}
}

Input.propTypes = {
	/**
	 * Название поля
	 */
	label: PropTypes.string,

	/**
	 * ID для сохранения и взятия из state данных
	 */
	id: PropTypes.string,

	/**
	 * Модификатор, указывающий должен ли быть текст в одну строчку с полем
	 */
	inline: PropTypes.bool,

	/**
	 * Указывает на тип поля: block - textarea, inline - input
	 */
	type: PropTypes.oneOf(['block', 'inline']),

	/**
	 * Текущее значение
	 */
	inputValue: PropTypes.string,

	/**
	 * Обработчик изменения
	 */
	handleInput: PropTypes.func
};

export default Input;


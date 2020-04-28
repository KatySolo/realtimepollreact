import React from 'react';
import './styles.css';
import { FunctionalParticle } from '../FunctionalParticle';
import PropTypes from 'prop-types';


/**
 *Поле для оценки
 *
 *@component
 */
class Rating extends FunctionalParticle {
	constructor(props) {
		super(props, 'rating', props.id);
		this.state = {
			isValid: true
		};

		this.checkIfValueIsValid = this.checkIfValueIsValid.bind(this);
	}

	checkIfValueIsValid (value) {
		const isValid = value >= this.props.min && value <= this.props.max;
		this.setState(
			{ isValid },
			() => this.props.handleScore(super.getId(), parseInt(value))
		);
	}

	render() {
		const { id, label, inputValue, max, min } = this.props;
		const { isValid } = this.state;
		return (
			<div className="rating">
				<span className="ratingName" id={id}>{label}</span>
				<input
					className={isValid ? 'ratingInput' : 'ratingInput invalid'}
					placeholder='5'
					type='number'
					min={min}
					max={max}
					value={inputValue}
					onChange={value => this.checkIfValueIsValid(value.target.value)}
				/>
			</div>
		);
	}
}

Rating.propTypes = {
	/**
	 * Название оценки
	 */
	label: PropTypes.string,

	/**
	 * ID для сохранения и взятия из state данных
	 */
	id: PropTypes.string,

	/**
	 * Текущее значение
	 */
	inputValue: PropTypes.string,

	/**
	 * Обработчик изменения
	 */
	handleScore: PropTypes.func,

	/**
	 * Минимальное допустимое значение
	 */
	min: PropTypes.number,

	/**
	 * Максимальное допустимое значение
	 */
	max: PropTypes.number
};



export default Rating;

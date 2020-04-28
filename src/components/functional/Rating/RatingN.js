import React, { Component } from 'react';
import Rating from './Rating';
import { connect } from 'react-redux';
import '../../layouts/ThreeColumns/styles.css';
import PropTypes from 'prop-types';

const mapStateToProps = store => {
	return {
		surveyScore: store.survey
	};
};

/**
 * Панель из N оценок
 *
 * @component
 * @example
 * const n = 3
 * const labels=['Форма','Интерес', 'Содержание']
 * const ids=['form', 'interest', 'content']
 * const max=10
 * const min=1
 * const handleScore=(title, value) => console.log(title, value);
 *
 * return <RatingN n labels ids max min handleScore />
 */
class RatingN extends Component {
	constructor(props) {
		super(props);

		if (props.n !== props.labels.length || props.n !== props.ids.length) {
			throw new Error('Неверное N');
		}
	}

	render() {
		const { labels, ids, max, min, surveyScore, handleScore } = this.props;

		return (
			<div className='three-column'>
				{labels.map((value, ind) => {
					return (
						<Rating
							label={value}
							id={ids[ind]}
							inputValue={surveyScore[ids[ind]]}
							min={min}
							max={max}
							key={ind}
							handleScore={handleScore}
						/>
					);
				})}
			</div>
		);
	}
}

RatingN.propTypes = {
	/**
	 * Количество полей для оценки
	 */
	n: PropTypes.number,

	/**
	 * Названия полей
	 */
	labels: PropTypes.arrayOf(PropTypes.string),

	/**
	 * Массив ID для сохранения и взятия из state данных
	 */
	ids: PropTypes.arrayOf(PropTypes.string),

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

export default connect(mapStateToProps)(RatingN);


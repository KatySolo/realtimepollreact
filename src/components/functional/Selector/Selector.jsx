import React from 'react';
import './styles.css';
import { FunctionalParticle } from '../FunctionalParticle';
import PropTypes from 'prop-types';

/**
 * Component for selector with label
 */
export class Selector extends FunctionalParticle {
	constructor(props) {
		super(props, 'selector', 'sessionId');
	}

	render() {
		return (
			<div className='selectorContainer'>
				<div className='selectorName'>{this.props.label}</div>
				{this.props.content === undefined && <span className='loadingMsg'>Загрузка...</span>}
				{this.props.content !== undefined &&
				<select
					className='selector'
					onChange={e => this.props.handleSelect(super.getId(),e.target.value)}>
					<option value={-1}>Выберите вариант</option>
					{this.props.content !== undefined && this.props.content.map(option => {
						return (
							<option value={option.id} key={option.id}>{option.title} ({option.lector.name})</option>
						);
					})}
				</select>
				}
			</div>
		);
	}
}

Selector.propTypes = {
	/**
	 * Название поля
	 */
	label: PropTypes.string,

	/**
	 * Массив данных для выпадающего меню
	 */
	content: PropTypes.arrayOf(PropTypes.string),

	/**
	 * Обработчик выбора
	 */
	handleSelect: PropTypes.func
};

import React from 'react';
import { registerLocale, setDefaultLocale } from  'react-datepicker';
import ru from 'date-fns/locale/ru';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';
import { FunctionalParticle } from '../FunctionalParticle';

/**
 * Календарь для выбора даты
 *
 *@component
 */
export class Calendar extends FunctionalParticle {
	constructor(props) {
		super(props, 'datePicker', props.id);
		registerLocale('ru', ru);
		setDefaultLocale('ru');

		this.state = {
			date: new Date()
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(date) {
		this.setState({ date });
		this.props.handleInput(super.getId(), date);
	}

	render() {
		return (
			<div className={'input '+this.props.id}>
				<span className="inputName">{this.props.label}</span>
				<DatePicker
					className="inputInline"
					selected={this.state.date}
					onChange={this.handleChange}
					dateFormat='dd/MM/yyyy, HH:mm'
				/>
			</div>
		);
	}
}

Calendar.propTypes = {
	/**
	 * Название календаря
	 */
	label: PropTypes.string,

	/**
	 * ID для сохранения и взятия из state данных
	 */
	id: PropTypes.string,

	/**
	 * Обработчик изменения
	 */
	handleInput: PropTypes.func
};

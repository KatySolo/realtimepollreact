import React, { Component } from 'react';
import { registerLocale, setDefaultLocale } from  'react-datepicker';
import ru from 'date-fns/locale/ru';
import Start from './childrens/Start';
import Finish from './childrens/Finish';

/**
 *Component-fabric for DatePicker component
 */
export class DatePicker extends Component {
	constructor(props) {
		super(props);
		registerLocale('ru', ru);
		setDefaultLocale('ru');
	}

	convertToTimeString(input) {
		const result = input.match(/\d{2,4}/g);
		return `${result[2]}-${result[1]}-${result[0]}T${result[3]}:${result[4]}`;
	}

	render() {
		switch (this.props.id) {
		case 'start':
			return (<Start {...this.props} converter={this.convertToTimeString} />);

		case 'finish':
			return (<Finish {...this.props} converter={this.convertToTimeString} />);

		default:
			return (
				<div className='datePicker' />
			);
		}
	}
}

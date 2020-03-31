import React, { Component } from 'react';
import Start from './childrens/Start';
import Finish from './childrens/Finish';

/**
 *Component-fabric for DatePicker component
 */
export class DatePicker extends Component {
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSessionStart } from '../../../actions/sessionActions';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const mapDispatchToProps = dispatch => {
	return {
		setSessionStart: name => dispatch(setSessionStart(name))
	};
};

/**
 * Implementation for DatePicker Fabric for start date
 */
class StartDatePicker extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			date: new Date()
		};
	}

	handleChange(date) {
		this.setState({ date });
		this.props.setSessionStart(date);
	}

	render() {
		return(
			<div className="input startDate">
				<span className="inputName">{this.props.lable}</span>
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

export default connect(null, mapDispatchToProps)(StartDatePicker);

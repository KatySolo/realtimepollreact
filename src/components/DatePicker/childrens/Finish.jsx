import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import { setSessionFinish } from '../../../actions/sessionActions';

const mapDispatchToProps = dispatch => {
	return {
		setSessionFinish: name => dispatch(setSessionFinish(name))
	};
};

/**
 * Implementation for DatePicker Fabric for finish date
 */
class FinishDatePicker extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			date: new Date()
		};
	}

	componentDidMount() {
		this.props.setSessionFinish(this.state.date.toUTCString());
	}

	handleChange(date) {
		this.setState({ date });
		this.props.setSessionFinish(date.toUTCString());
	}

	render() {
		return(
			<div className="input finishDate">
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

export default connect(null, mapDispatchToProps)(FinishDatePicker);

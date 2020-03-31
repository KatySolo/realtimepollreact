import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSessionStart } from '../../../actions/sessionActions';

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
		this.state = {
			date: this.props.converter(new Date().toLocaleString())
		};
	}

	render() {
		return(
			<div className="input">
				<span className="inputName">{this.props.lable}</span>
				<input
					className="inputInline"
					type='datetime-local'
					value={this.state.date}
					onChange={value => this.setState({ date: value.currentTarget.value }, () => this.props.setSessionStart(new Date(this.state.date)))}
				/>
			</div>
		);
	}
}

export default connect(null, mapDispatchToProps)(StartDatePicker);

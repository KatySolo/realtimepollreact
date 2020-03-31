import React, { Component } from 'react';
import { connect } from 'react-redux';
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
					onChange={ value => this.setState({ date: value.currentTarget.value }, () => this.props.setSessionFinish(new Date(this.state.date)))}
				/>
			</div>
		);
	}
}

export default connect(null, mapDispatchToProps)(FinishDatePicker);

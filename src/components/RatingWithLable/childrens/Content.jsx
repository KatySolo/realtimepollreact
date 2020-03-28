import React, { Component } from 'react';
import { RaitingTemplate } from '../RaitingTemplate';
import { setContentValue } from '../../../actions/surveyActions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
	return {
		handleValue: content => dispatch(setContentValue(content))
	};
};

class ContentRaiting extends Component {
	render() {
		return (<RaitingTemplate {...this.props} />);
	}
}

export default connect(null, mapDispatchToProps)(ContentRaiting);
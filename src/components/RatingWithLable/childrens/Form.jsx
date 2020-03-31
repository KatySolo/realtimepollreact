import React, { Component } from 'react';
import { RaitingTemplate } from '../RaitingTemplate';
import { setFormValue } from '../../../actions/surveyActions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
	return {
		handleValue: form => dispatch(setFormValue(form)),
	};
};

/**
 * Implementation for RaitingWithLable Fabric for form raiting
 */
class FormRaiting extends Component {
	render(){
		return( <RaitingTemplate {...this.props} />);
	}
}

export default connect(null, mapDispatchToProps)(FormRaiting);

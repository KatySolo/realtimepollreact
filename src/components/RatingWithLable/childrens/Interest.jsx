import React, { Component } from 'react';
import { RaitingTemplate } from '../RaitingTemplate';
import { setInterestValue } from '../../../actions/surveyActions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
	return {
		handleValue: interest => dispatch(setInterestValue(interest))
	};
};

class InterestRaiting extends Component {
	render(){
		return (<RaitingTemplate {...this.props}/>);
	}
}

export default connect(null, mapDispatchToProps)(InterestRaiting);
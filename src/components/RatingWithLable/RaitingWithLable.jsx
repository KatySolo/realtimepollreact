import React, { Component } from 'react';
import './styles.css';
import FormRaiting from './childrens/Form';
import ContentRaiting from './childrens/Content';
import InterestRaiting from './childrens/Interest';

export default class RatingWithLable extends Component {
	render(){
		switch(this.props.id) {
		case 'form':
			return <FormRaiting {...this.props}/>;
		case 'content':
			return <ContentRaiting {...this.props}/>;
		case 'interest':
			return <InterestRaiting {...this.props}/>;
		default:
			return <div className="rating"/>;
		}
	}
}

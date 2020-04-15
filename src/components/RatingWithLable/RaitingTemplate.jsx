import React, { Component } from 'react';
import './styles.css';

/**
 * Template for RaitingWithLable components
 */
export class RaitingTemplate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isValid: true
		};
	}

	isValidValue (value) {
		if (value < 1 ||value > 10) {
			this.setState({ isValid: false }, () => this.props.handleValue(parseInt(value)));
		} else {
			this.setState({ isValid: true }, () => this.props.handleValue(parseInt(value)));
		}
	}

	render() {
		// TODO invalid span issue
		const { id, lable, inputValue } = this.props;
		const { isValid } = this.state;
		return (
			<div className="rating">
				<span className="ratingName" id={id}>{lable}</span>
				<input
					className={isValid ? 'ratingInput' : 'ratingInput invalid'}
					placeholder='5'
					type='number'
					min='1'
					max='10'
					value={inputValue}
					onChange={value => this.isValidValue(value.target.value)}
					// onFocus={value => value.target.select()}
				/>
			</div>
		);
	}
}


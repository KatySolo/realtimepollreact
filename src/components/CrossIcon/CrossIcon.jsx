import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import './CrossIcon.css';

export default class CrossIcon extends Component {
	renderTooltip() {
		return(
			<div className='delete-tooltip'>
				{this.props.question}
			</div>
		);
	}

	render() {
		return (
			<>
				<div data-tip={this.props.question} onClick={this.props.onClick} className="cross-icon">
                    ✕
				</div>
				<ReactTooltip 
					className='delete-tooltip' 
					backgroundColor='#c4c4c4' 
					textColor='#000000'
					effect='solid' 
				/>
			</>
		);
	}
}

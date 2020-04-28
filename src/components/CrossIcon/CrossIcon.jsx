import React from 'react';
import ReactTooltip from 'react-tooltip';
import './CrossIcon.css';

export default function CrossIcon(props) {
	return (
		<>
			<div data-tip={props.question} onClick={props.onClick} className="cross-icon">
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

import React from 'react';
import './styles.css';

/**
 * Functional component for three column layout
 * @param props columns content
 * @constructor
 */
export function ThreeColumnsLayout(props) {
	return <div className='three-column'>{props.children}</div>;
}

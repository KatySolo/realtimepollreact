import React from 'react';
import './styles.css';

/**
 * Обертка для меню.
 *
 * @component
 */
export function Menu (props) {
	return <div className='menu'>{props.children}</div>;
}

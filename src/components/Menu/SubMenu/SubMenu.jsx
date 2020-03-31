import React from 'react';
import './styles.css';

/**
 * Component for submenu
 */
export function SubMenu(props) {
	return <div className={'submenu'}>{props.children}</div>;
}

import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';


/**
 * Обертка для меню второго уровня.
 *
 * @component
 */
export class SubMenu extends React.Component {
	render() {
		return (<div className={'submenu'}>{this.props.children}</div>);
	}
}

SubMenu.propTypes = {
	children: PropTypes.element.isRequired
};

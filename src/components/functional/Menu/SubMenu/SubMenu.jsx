import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import { MenuItem } from '../index';


/**
 * Обертка для меню второго уровня.
 *
 * @component
 */
export class SubMenu extends React.Component {
	render() {
		return (
			<div className="submenu">
				<span className="itemName">{this.props.title}</span>
				<div className='submenuCont'>
					{this.props.dict.map((el, ind) => {
						return (
							<MenuItem
								title={el.title}
								id={el.id}
								handleSelect={this.props.handleSelect}
								domain={this.props.domain}
								key={ind}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

SubMenu.propTypes = {
	/**
	 *  Название категории
	 */
	title: PropTypes.string,

	/**
	 * Названия домена
	 */
	domain: PropTypes.string,

	/**
	 * Словарь названий пунктов и их ID
	 */
	dict: PropTypes.arrayOf(PropTypes.object),

	/**
	 * Обработчик выбора
	 */
	handleSelect: PropTypes.func
};

import React from 'react';
import './styles.css';
import { FunctionalParticle } from '../../FunctionalParticle';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


/**
 * Элемент меню
 * Ссылка на страницу формируется как /admin/{domain}/{id}
 *
 * @component
 */
class MenuItem extends FunctionalParticle {
	constructor(props) {
		super(props, props.domain, props.id);

		this.handleEvent = this.handleEvent.bind(this);
	}

	handleEvent() {
		this.props.handleSelect(super.getTitle()+'_'+super.getId());
	}


	render() {
		const { currentSection } = this.props;
		return(
			<Link to={'/admin/'+super.getTitle()+'/'+super.getId()} >
				<div className={super.getTitle()+'_'+super.getId() === currentSection ? 'menuItem active' : 'menuItem'} onClick={this.handleEvent}>
					<span className="itemName">
						{this.props.title}
					</span>
				</div>
			</Link>
		);
	}
}

MenuItem.propTypes = {
	/**
	 * Название пункта меню
	 */
	title: PropTypes.string,

	/**
	 * ID пункта
	 */
	id: PropTypes.string,

	/**
	 * Обработчки выбора
	 */
	handleSelect: PropTypes.func,

	/**
	 * Название домена
	 */
	domain: PropTypes.string
};

export default MenuItem;

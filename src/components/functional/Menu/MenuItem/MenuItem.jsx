import React from 'react';
import { connect } from 'react-redux';
import './styles.css';
import { setSection } from '../../../../actions/appActions';
import { FunctionalParticle } from '../../FunctionalParticle';
import * as PropTypes from 'prop-types';

const mapDispatchToProps = dispatch => {
	return {
		setSection: section => dispatch(setSection(section))
	};
};

const mapStateToProps = state => {
	return {
		currentSection: state.app.section
	};
};

/**
 * Элемент меню
 *
 * @component
 */
class MenuItem extends FunctionalParticle {
	constructor(props) {
		super(props, 'menuItem', props.id);
		this.state = {
			isSubMenu: this.props.children !== undefined,
		};

		this.handleEvent = this.handleEvent.bind(this);
	}

	handleEvent() {
		this.props.setSection(this.props.id);
	}


	render() {
		if (this.state.isSubMenu) {
			return (
				<div className="menuItem">
					<span className="itemName">{this.props.title}</span>
					<div className='submenuCont'>{this.props.children}</div>
				</div>
			);
		} else {
			return(
				<div className={this.props.id === this.props.currentSection ? 'menuItem active' : 'menuItem'} onClick={this.handleEvent}>
					<span className="itemName">
						{this.props.title}
					</span>
				</div>
			);
		}
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
	id: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);

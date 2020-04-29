import React from 'react';
import './styles.css';
import { SubMenu } from '../index';
import { setSection } from '../../../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const mapDispatchToProps = dispatch => {
	return {
		handleSelect: section => dispatch(setSection(section))
	};
};

const mapStateToProps = state => {
	return {
		currentSection: state.app.section
	};
};
/**
 * Обертка для меню.
 *
 * @component
 * @param index - индекс, по котрому строится меню
 * Индекс это массив объектов типа:
 * {
	title: 'Опросы', // название секции
	domain: 'sessions', // имя домена, которое используется в адресе
	dict: [ // словарь подпунктов
		{id: 'all', title: 'Показать список'} // пара вида id-lable
	]
	}
 */
class Menu extends React.Component {
	render() {
		return <div className='menu'>
			{this.props.index.map((data, ind) => {
				return (
					<SubMenu
						title={data.title}
						domain={data.domain}
						dict={data.dict}
						handleSelect={this.props.handleSelect}
						key={ind}
					/>
				);
			})}
		</div>;
	}
}

Menu.propTypes = {
	index: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

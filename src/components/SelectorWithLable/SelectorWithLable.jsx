import React, { Component } from 'react';
import './styles.css';
import axios from 'axios';
import { setSessions, setSessionId } from '../../actions/sessionActions';
import { store } from '../../index';

/**
 * Component for selector with lable
 */
export class SelectorWithLable extends Component {
	componentDidMount() {
		console.log(process.env.REACT_APP_URL);
		axios.get(process.env.REACT_APP_URL + '/current')
			.then(res => {
				store.dispatch(setSessions(res.data));
			});
	}

	handleSelect(value) {
		store.dispatch(setSessionId(value.target.value));
	}

	render() {
		return (
			<div className='selectorContainer'>
				<div className='selectorName'>{this.props.lable}</div>
				{this.props.sessions === undefined && <span className='loadingMsg'>Загрузка...</span>}
				{this.props.sessions !== undefined &&
				<select className='selector' onChange={this.handleSelect}>
					<option value={-1}>Выберите лекцию</option>
					{this.props.sessions !== undefined && this.props.sessions.map(option => {
						return (
							<option value={option.id} key={option.id}>{option.title}</option>
						);
					})}
				</select>
				}
			</div>
		);
	}
}

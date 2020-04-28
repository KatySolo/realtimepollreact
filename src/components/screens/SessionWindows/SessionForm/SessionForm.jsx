import React,  { Component } from 'react';
import Input from '../../../functional/Input/Input';
import { Calendar } from '../../../functional/Calendar/Calendar';
import { connect } from 'react-redux';
import SubmitButton from '../../../functional/SubmitButton/SubmitButton';
import axios from 'axios';
import './styles.css';
import auth0Client from '../../../../Auth';
import { setSessionParam } from '../../../../actions';



const mapStateToProps = store => {
	return {
		title: store.session.title,
		lector: store.session.lector,
		start: store.session.start,
		finish: store.session.finish
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setSessionParam: (title, value) => dispatch(setSessionParam(title, value))
	};
};

/**
 *Создание новой сессии
 *
 *@component
 *@category Windows
 */
class SessionForm extends Component {
	constructor(props) {
		super(props);
		this.state={
			msg: '',
			type: 'none'
		};

		this.isValidForm = this.isValidForm.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	isValidForm() {
		const { title, lector, start, finish } = this.props;
		const startToDate = new Date(start);
		const finishToDate = new Date(finish);


		return title !== '' && lector !== '' && startToDate <= finishToDate;
	}

	handleSubmit() {
		const { title, lector, start, finish } = this.props;

		axios.post(process.env.REACT_APP_URL + '/session', {
			title,
			username: lector,
			start,
			finish
		},{
			headers: { 'Authorization': `Bearer ${auth0Client.getIdToken()}` }
		}).then(res => {
			setTimeout(() => this.setState({ msg: '', type: 'none' }), 5000);
			this.setState({ msg: res.data, type: 'ok' });
		}).catch((error) => {
			setTimeout(() => this.setState({ msg: '', type: 'none' }), 5000);
			this.setState({ msg: error.response.data.text || 'Произошла ошибка', type: 'err' });
		});
	}

	render(){
		return (
			<div className="sessionForm">
				<div className='formTitle'>Добавить сессию</div>
				<div className='formContent'>
					<Input
						label="Название"
						inline={true}
						id='title'
						type='inline'
						inputValue={this.props.title}
						handleInput={this.props.setSessionParam}
					/>
					<Input
						label="Лектор"
						id='lector'
						type='inline'
						inline={true}
						inputValue={this.props.lector}
						handleInput={this.props.setSessionParam}
					/>
					<div className='date_container'>
						<Calendar
							label="Начало"
							id="start"
							handleInput={this.props.setSessionParam}
						/>

						<Calendar
							label="Конец"
							id="finish"
							handleInput={this.props.setSessionParam}
						/>
					</div>
					<div className='footer'>
						<SubmitButton text="Добавить" isValid={this.isValidForm} handleSubmit={this.handleSubmit} />
						<div className={'msgResultBox ' + this.state.type}>
							<div className='msgResultBox_text'>{this.state.msg}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

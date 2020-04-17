import React,  { Component } from 'react';
import InputWithLable from '../../InputWithLable/InputWithLable';
import { DatePicker } from '../../DatePicker/DatePicker';
import { connect } from 'react-redux';
import SubmitButton from '../../SubmitButton/SubmitButton';
import axios from 'axios';
import './styles.css';
import auth0Client from '../../../Auth';


const mapStateToProps = store => {
	return {
		title: store.session.title,
		username: store.session.username,
		start: store.session.start,
		finish: store.session.finish
	};
};

/**
 * Component for session form window
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
		const { title, username, start, finish } = this.props;

		return title !== '' && username !== '' && start <= finish;
	}

	handleSubmit() {
		const { title, username, start, finish } = this.props;
		console.log(start);

		axios.post(process.env.REACT_APP_URL + '/session', {
			title,
			username,
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
					<InputWithLable lable="Название" id='sessionName' />
					<InputWithLable lable="Лектор" id='sessionLector' />
					<div className='date_container'>
						<DatePicker lable="Начало" id="start" />
						<DatePicker lable="Конец" id="finish" />
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

export default connect(mapStateToProps)(SessionForm);

import React, { Component }  from 'react';
import InputWithLable from '../../InputWithLable/InputWithLable';
import { connect } from 'react-redux';
import axios from 'axios';
import './styles.css';
import auth0Client from '../../../Auth';

const mapStateToProps = state => {
	return {
		name: state.user.name
	};
};

/**
 * Component for user form window
 */
class UsersForm extends Component {
	constructor(props) {
		super(props);
		this.state={
			msg: '',
			isError: false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit() {
		axios.post('https://realtimepoll-server.herokuapp.com/user',{
			name: this.props.name
		},{
			headers: { 'Authorization': `Bearer ${auth0Client.getIdToken()}` }
		}).then(res => {
			setTimeout(() => {this.setState({ msg: '' });}, 5000);
			this.setState({ msg: res.data, isError: false });
		}).catch((error) => {
			setTimeout(() => {this.setState({ msg: '', isError: false });}, 5000);
			this.setState({ msg: error.response.data.text || 'Такой пользователь существует', isError: true });
		});

	}

	render(){
		// TODO clear state after login + clean form
		return (
			<div className='usersForm'>
				<InputWithLable lable='Введите имя нового пользователя' id='name'/>
				<button
					className='sendNewUserButton'
					disabled={!this.props.name}
					onClick={this.handleSubmit}>
                    Создать
				</button>
				<div className={this.state.isError ? 'msgBox error' : 'msgBox correct'}>
					{this.state.msg}
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps)(UsersForm);

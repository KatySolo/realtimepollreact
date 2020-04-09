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
			type: 'none'
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit() {
		axios.post(process.env.REACT_APP_URL + '/user',{
			name: this.props.name
		},{
			headers: { 'Authorization': `Bearer ${auth0Client.getIdToken()}` }
		}).then(res => {
			setTimeout(() => {this.setState({ msg: '', type: 'none' });}, 5000);
			this.setState({ msg: res.data, type: 'ok' });
		}).catch((error) => {
			setTimeout(() => {this.setState({ msg: '', type: 'none' });}, 5000);
			this.setState({ msg: error.response.data.text || 'Такой пользователь существует', type: 'err' });
		});

	}

	render(){
		// TODO clear state after login + clean form
		return (
			<div className='usersForm'>
				<div className='formTitle'>Добавить пользователя</div>
				<div className='formContent'>
					<InputWithLable lable='Имя' id='name'/>
					<div className='footer'>
						<div className='buttonContainer'>
							<button
								className='sendNewUserButton submitButton'
								disabled={!this.props.name}
								onClick={this.handleSubmit}>
							Создать
							</button>
						</div>
						<div className={'msgResultBox ' + this.state.type}>
							<div className='msgResultBox_text'>{this.state.msg}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps)(UsersForm);

import React, { Component }  from 'react';
import InputWithLabel from '../../../functional/Input/Input';
import { connect } from 'react-redux';
import './styles.css';
import { setUserParam } from '../../../../actions';
import { createUser } from '../../../../api/user';

const mapDispatchToProps = dispatch => {
	return {
		setUserParam: (title, value) => dispatch(setUserParam(title, value))
	};
};


const mapStateToProps = state => {
	return {
		name: state.user.name
	};
};

/**
 *Создание нового пользователя
 *
 *@component
 *@category Windows
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
		createUser(this.props.name)
			.then(res => {
				setTimeout(() => {this.setState({ msg: '', type: 'none' });}, 5000);
				this.setState({ msg: res.data, type: 'ok' });
			}).catch((error) => {
				setTimeout(() => {this.setState({ msg: '', type: 'none' });}, 5000);
				this.setState({ msg: error.response.data.text || 'Такой пользователь существует', type: 'err' });
			});
	}

	render(){
		return (
			<div className='usersForm'>
				<div className='formTitle'>Добавить пользователя</div>
				<div className='formContent'>
					<InputWithLabel
						label='Имя'
						id='name'
						inline={true}
						display='inline'
						inputValue={this.props.name}
						handleInput={this.props.setUserParam}
					/>

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersForm);

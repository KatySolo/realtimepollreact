import React, { Component } from 'react';
import './adminPanel.css';
import './adminLogin.css';
import { Menu, MenuItem } from '../../functional/Menu';
import { SessionsList, SessionForm, SessionInfo } from '../SessionWindows';
import { UsersList, UsersForm } from '../UserWindows';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	withRouter
} from 'react-router-dom';
import auth0Client from '../../../Auth';
import { resetStore, setColor } from '../../../actions/appActions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
	return {
		setAppColor: name => dispatch(setColor(name)),
		resetStore: () => dispatch(resetStore())
	};
};

/**
 *Панель администратора
 *
 *@component
 *@category Windows
 */
class AdminPanel extends Component {
	constructor(props) {
		super(props);
		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
	}
	logout() {
		auth0Client.signOut();
		this.props.resetStore();
		this.props.history.replace('/');
	}

	login() {
		auth0Client.signIn();
	}

	render() {
		if (!auth0Client.isAuthenticated()) {
			this.props.setAppColor('green');
			return (
				<div className='adminLogin'>
					<div className='loginText'>Доступ к панели администратора ограничен</div>
					<hr />
					<button className='submitButton login' onClick={this.login}>Войти</button>
				</div>

			);
		} else {
			const index = [
				{
					title: 'Опросы',
					domain: 'sessions',
					dict: [
						{
							id: 'all',
							title: 'Показать список'
						},
						{
							id: 'add',
							title:'Добавить'
						}
					]
				},{
					title: 'Пользователи',
					domain: 'users',
					dict: [
						{
							id: 'all',
							title: 'Показать список'
						},
						{
							id: 'add',
							title:'Добавить'
						}
					]
				}
			];
			this.props.setAppColor('yellow');
			return (
				<div className="adminPanel">
					<Router>
						<div className='header'>
							<Menu index={index}/>
							<span className='logout' onClick={this.logout}><MenuItem title='Выйти'/></span>
						</div>

						<div className='adminPanel_content'>
							<Switch>
								<Route path="/admin/sessions/all" component={SessionsList}/>
								<Route path="/admin/sessions/add" component={SessionForm}/>
								<Route path="/admin/users/all" component={UsersList}/>
								<Route path="/admin/users/add" component={UsersForm}/>
								<Route path="/admin/sessions/:id" render={(props) => <SessionInfo {...props} />} />
							</Switch>
						</div>
					</Router>
				</div>
			);
		}
	}
}

export default withRouter(connect(null, mapDispatchToProps)(AdminPanel));

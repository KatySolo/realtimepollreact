import React, { Component } from 'react';
import './adminPanel.css';
import './adminLogin.css'
import { Menu, MenuItem, SubMenu } from '../Menu';
import { SessionsList, SessionForm, SessionInfo } from '../SessionWindows';
import { UsersList, UsersForm } from '../UserWindows';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	withRouter
} from 'react-router-dom';
import auth0Client from '../../Auth';
import { resetStore, setColor } from '../../actions/appActions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
	return {
		setAppColor: name => dispatch(setColor(name)),
		resetStore: () => dispatch(resetStore())
	};
};

/**
 * Component for admin panel
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
			this.props.setAppColor('yellow');
			return (
				<div className="adminPanel">
					<Router>
						<div className='header'>
							<Menu >
								<MenuItem title="Опросы">
									<SubMenu>
										<Link to='/admin/sessions/list'><MenuItem title="Показать список" id='all_surveys' /></Link>
										<Link to='/admin/sessions/add'><MenuItem title="Добавить" id='add_survey' /></Link>
									</SubMenu>
								</MenuItem>
								<MenuItem title="Пользователи">
									<SubMenu>
										<Link to='/admin/users/list'><MenuItem title="Показать список" id='all_users'/></Link>
										<Link to='/admin/users/add'><MenuItem title="Добавить" id='add_user'/></Link>
									</SubMenu>
								</MenuItem>
								{/* // remove cookie and logput */}
							</Menu>
							<span className='logout' onClick={this.logout}><MenuItem title='Выйти'/></span>
						</div>

						<div className='adminPanel_content'>
							<Switch>
								<Route path="/admin/sessions/list" component={SessionsList}/>
								<Route path="/admin/sessions/add" component={SessionForm}/>
								<Route path="/admin/users/list" component={UsersList}/>
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

import React, { Component }  from 'react';
import './styles.css';
import Loader from 'react-loader-spinner';
import UsersListItem from './UsersListItem';
import { getUsersList } from '../../../../api/user';

/**
 *Список всех пользователей
 *
 *@component
 *@category Windows
 */
export class UsersList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			totalNumber: 0,
			users: [],
			dataIsFetched: false
		};
		this.fetchUsers = this.fetchUsers.bind(this);
		this.onDelete = this.onDelete.bind(this);
	}

	componentDidMount() {
		this.fetchUsers();
	}

	onDelete() {
		this.fetchUsers();
	}

	fetchUsers() {
		getUsersList()
			.then(res => {
				this.setState({ users: res.data.users, totalNumber: res.data.totalNumber, dataIsFetched: true });
			});
	}

	render() {
		if (!this.state.dataIsFetched) {
			return (
				<Loader type="ThreeDots" color="black"/>
			);
		} else {
			return (
				<div className='usersList'>
					<div className='formTitle'>Список пользователей</div>
					<div className='formContent'>
						<div className='totalNumber'>
							<b>Всего пользователей:</b>
							<span className='totalCounter'>{this.state.totalNumber}</span>
						</div>
						<ol>
							{this.state.users.map((user) => {
								return (
									<UsersListItem key={user.id} {...user} onDelete={this.onDelete}/>
								);
							})}
						</ol>
					</div>
				</div>
			);
		}
	}
}

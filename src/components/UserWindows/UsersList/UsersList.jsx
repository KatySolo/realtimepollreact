import React, { Component }  from 'react';
import './styles.css';
import axios  from 'axios';
import Loader from 'react-loader-spinner';

/**
 * Component for user list window
 */
export class UsersList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			totalNumber: 0,
			users: [],
			dataIsFetched: false
		};
	}

	componentDidMount() {
		axios.get(process.env.REACT_APP_URL + '/users')
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
							{this.state.users.map((user, key) => {
								return (
									<li key={key}>{user.name}</li>
								);
							})}
						</ol>
					</div>
				</div>
			);
		}
	}
}

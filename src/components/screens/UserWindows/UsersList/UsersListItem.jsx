import React, { Component } from 'react';
import CrossIcon from '../../../functional/CrossIcon/CrossIcon';
import { deleteUser } from '../../../../api/user';

export default class UsersListItem extends Component {
	constructor(props) {
		super(props);
		this.onDelete = this.onDelete.bind(this);
	}

	onDelete() {
		deleteUser(this.props.id)
			.then(() => this.props.onDelete());
	}

	render() {
		return (
			<li>
				<span className='user-item__user-name'>{this.props.name}</span>
				<CrossIcon 
					onClick={this.onDelete} 
					question={`Удалить пользователя ${this.props.name}?`} 
				/>
			</li>
		);
	}
}

import React, { Component } from 'react';
import axios  from 'axios';
import CrossIcon from '../../../CrossIcon/CrossIcon';

export default class UsersListItem extends Component {
	constructor(props) {
		super(props);
		this.onDelete = this.onDelete.bind(this);
	}

	onDelete() {
		axios.delete(process.env.REACT_APP_URL + `/user/${this.props.id}`)
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

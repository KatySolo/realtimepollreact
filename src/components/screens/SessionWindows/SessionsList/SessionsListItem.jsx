import React, { Component } from 'react';
import axios  from 'axios';
import CrossIcon from '../../../functional/CrossIcon/CrossIcon';
import { Link } from 'react-router-dom';

export default class UsersListItem extends Component {
	constructor(props) {
		super(props);
		this.onDelete = this.onDelete.bind(this);
	}

	onDelete() {
		axios.delete(process.env.REACT_APP_URL + `/session/${this.props.title}`)
			.then(() => this.props.onDelete());
	}

	render() {
		return (<tr>
			<td className='title_cell'>{this.props.title}</td>
			<td className='lector_cell'>{this.props.lector}</td>
			<td className='start_cell'>{new Date(this.props.start).toLocaleString()}</td>
			<td className='finish_cell'>{new Date(this.props.finish).toLocaleString()}</td>
			<td><span className={this.props.id === -1 ? this.props.isActive ? 'current' : 'future' : 'finished'} /></td>
			<td>
				<Link to={'/admin/sessions/'+this.props.id}>
					<span className={this.props.id === -1 ? 'disabled' : ''}>Посмотреть</span>
				</Link>
			</td>
			<td className='cross-icon_cell'>
				<CrossIcon
					onClick={this.onDelete}
					question={`Удалить сессию ${this.props.title}?`}
				/>
			</td>
		</tr>
		);
	}
}

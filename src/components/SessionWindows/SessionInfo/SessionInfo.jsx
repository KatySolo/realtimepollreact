import React, { Component } from 'react';
import './styles.css';
import axios from 'axios';
import Loader from 'react-loader-spinner';

export class SessionInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			start: '',
			finish: '',
			count: 0,
			form: 0,
			interest: 0,
			content: 0,
			comments:[],
			isDataReady: false
		};
	}

	componentDidMount(){
		const { id } = this.props.match.params;
		axios.get(`https://realtimepoll-server.herokuapp.com/results?id=${id}`)
			.then(res => {
				this.setState({
					isDataReady: true,
					title: res.data.title,
					start: new Date(res.data.start).toLocaleString(),
					finish: new Date(res.data.finish).toLocaleString(),
					count: res.data.count,
					form: res.data.form,
					interest: res.data.interest,
					content: res.data.content,
					comments: res.data.comments
				});
			});
	}

	render() {
		if (!this.state.isDataReady) {
			return (<Loader type='ThreeDots' color="black"/>);
		} else {
			return (
				<div className="sessionInfo">
					<div className='sessionTitle'><b>Название сессии: </b>{this.state.title}</div>
					<div className='sessionStart'><b>Начало сессии: </b>{this.state.start}</div>
					<div className='sessionFinish'><b>Окончание сессии: </b>{this.state.finish}</div>
					<div className='sessionCount'><b>Кол-во проголосовавших: </b>{this.state.count}</div>
					<div className='sessionForm'><b>Форма: </b>{this.state.form}</div>
					<div className='sessionInterest'><b>Интерес: </b>{this.state.interest}</div>
					<div className='sessionContent'><b>Содеражание: </b>{this.state.content}</div>
					<div className='sessionComments'><b>Коментарии: </b>
						{this.state.comments.length === 0 ? (
							<span>Никто не оставил коментариев</span>
						): (
							<ul>
								{this.state.comments.map((comment, key) => <li key={key}>{comment}</li>)}
							</ul>
						)}
					</div>
				</div>
			);}
	}
}
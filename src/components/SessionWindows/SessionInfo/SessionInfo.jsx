import React, { Component } from 'react';
import './styles.css';
import axios from 'axios';
import Loader from 'react-loader-spinner';

/**
 * Component for session info window
 */
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
		axios.get(`${ process.env.REACT_APP_URL }/results?id=${id}`)
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

	calcGrade(score) {
		if (score === 0) return 'none';
		return score < 5 ? 'bad' : score < 8 ? 'good' : 'excellent';
	}

	render() {
		if (!this.state.isDataReady) {
			return (<Loader type='ThreeDots' color="black"/>);
		} else {
			return (
				<div className="sessionInfo">
					<div className='formTitle'>Результаты сессии</div>
					<div className='formContent'>
						<div className='sessionTitle'><span>Название сессии: </span>{this.state.title}</div>
						<div className='dateSection'>
							<div className='sessionStart'><span>Начало сессии: </span>{this.state.start}</div>
							<div className='sessionFinish'><span>Окончание сессии: </span>{this.state.finish}</div>
						</div>
						<div className='sessionCount'><span>Кол-во проголосовавших: </span>{this.state.count}</div>
						<div className='resultsSection'>
							<div className='result formResult'>
								<span>Форма:</span>
								<div className={'bubble '+ this.calcGrade(this.state.form)}>
									{this.state.form}
								</div>
							</div>
							<div className='result interestResult'>
								<span>Интерес: </span>
								<div className={'bubble '+ this.calcGrade(this.state.interest)}>
									{this.state.interest}
								</div>
							</div>
							<div className='result contentResult'>
								<span>Содеражание: </span>
								<div className={'bubble '+ this.calcGrade(this.state.content)}>
									{this.state.content}
								</div>
							</div>
						</div>
						<div className='sessionComments'><span>Коментарии: </span>
							{this.state.comments.length === 0 ? (
								<span>Никто не оставил коментариев</span>
							): (
								<ul>
									{this.state.comments.map((comment, key) => <li key={key}>{comment}</li>)}
								</ul>
							)}
						</div>
					</div>
				</div>
			);}
	}
}

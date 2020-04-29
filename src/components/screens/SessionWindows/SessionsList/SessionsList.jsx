import React, { Component } from 'react';
import './styles.css';
import SessionsListItem from './SessionsListItem';
import Loader from 'react-loader-spinner';
import { getSessionsList } from '../../../../api/session';
const UPDATE_STEP = 60000;

/**
 *Таблица всех сессий
 *
 *@component
 *@category Windows
 */
export class SessionsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			results: [],
			isDataReady: false,
			TTU: UPDATE_STEP
		};

		this.fetchData = this.fetchData.bind(this);
		this.manualFetch = this.manualFetch.bind(this);
	}

	componentDidMount() {
		this.fetchData();
		this.timer = setInterval(() => {
			this.setState({ TTU: this.state.TTU - 1000 });
		}, 1000);
		this.interval = setInterval(() => {
			this.setState({ isDataReady: false }, () => this.fetchData());
		}, UPDATE_STEP);

	}

	componentWillUnmount() {
		clearTimeout(this.interval);
		clearTimeout(this.timer);
	}

	fetchData() {
		getSessionsList()
			.then(res => {
				this.setState({ results: res.data, isDataReady: true, TTU: UPDATE_STEP });
			});
	}

	manualFetch(e) {
		e.preventDefault();
		clearTimeout(this.interval);
		this.interval = setInterval(() => {
			this.setState({ isDataReady: false }, () => this.fetchData());
		}, UPDATE_STEP);
		this.setState({ isDataReady: false }, () => this.fetchData());
	}

	render() {
		if (!this.state.isDataReady){
			return <Loader type="ThreeDots" color="black"/>;
		} else {
			return (
				<div className="sessionsList">
					<div className='formTitle'>Список сессий</div>
					<div className='formContent'>
						<div className='ttu_container'>
							<span className='TTU'> Следующее обновление списка через: { this.state.TTU / 1000 } секунд </span>
							<button onClick={this.manualFetch} className='submitButton'> Обновить результаты </button>
						</div>
						<table cellSpacing='0'>
							<thead>
								<tr>
									<th>Название сессии</th>
									<th>Лектор</th>
									<th>Начало голосования</th>
									<th>Конец голосования</th>
									<th>Статус</th>
									<th>Результаты</th>
								</tr>
							</thead>
							<tbody>
								{this.state.results.map((result) => {
									return <SessionsListItem key={result.title} {...result} onDelete={this.fetchData}/>;
								})
								}
							</tbody>
						</table>
					</div>
				</div>)
			;}
	}
}

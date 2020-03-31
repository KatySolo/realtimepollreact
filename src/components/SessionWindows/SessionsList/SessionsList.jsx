import React, { Component } from 'react';
import './styles.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';

const UPDATE_STEP = 60000;
/**
 * Component for session list window
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
		axios.get(process.env.REACT_APP_URL + '/sessions')
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
					<span> Следующее обновление списка через: { this.state.TTU / 1000 } секунд </span>
					<button onClick={this.manualFetch}> Обновить результаты </button>
					<table>
						<thead>
							<tr>
								<td>Название сессии</td>
								<td>Начало голосования</td>
								<td>Конец голосования</td>
								<td>Статус</td>
								<td>Результаты</td>
							</tr>
						</thead>
						<tbody>
							{this.state.results.map((result, key) => {
								return (<tr key={key}>
									<td>{result.title}</td>
									<td>{new Date(result.start).toLocaleString()}</td>
									<td>{new Date(result.finish).toLocaleString()}</td>
									<td><span className={result.id === -1 ? result.isActive ? 'current' : 'future' : 'finished'} /></td>
									<td>
										<Link to={'/admin/sessions/'+result.id}>
											<span className={result.id === -1 ? 'disabled' : ''}>Посмотреть</span>
										</Link>
									</td>
								</tr>
								);
							})
							}
						</tbody>
					</table>
				</div>
			);}
	}
}

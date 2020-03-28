import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import auth0Client from './Auth';

class Callback extends Component {
	constructor(props) {
		super(props);
		this.state = {
			msg: 'Загрузка панели...'
		};
	}
	componentDidMount() {
		auth0Client.handleAuthentication()
			.then(() => {
				this.props.history.replace('/admin');
			})
			.catch(() => {
				this.setState({ msg: 'В доступе отказано' });
			});
	}

	render() {
		return (
			<p>{this.state.msg}</p>
		);
	}
}

export default withRouter(Callback);

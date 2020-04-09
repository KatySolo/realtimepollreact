import React, { Component } from 'react';
import  Survey  from './components/Survey/Survey';
import AdminPanel from './components/AdminPanel/AdminPanel';
import Callback from './Callback';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';

const mapPropsToState = store => {
	return {
		color: store.app.color
	};
};

class App extends Component {
	render(){
		return (
			<div className={'App '+ this.props.color}>
				<Router>
					<Switch>
						<Route path="/" exact component={Survey}/>
						<Route path="/admin" component={AdminPanel}/>
						<Route exact path='/callback' component={Callback}/>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default connect(mapPropsToState)(App);

import React from 'react';
import  Survey  from './components/Survey/Survey';
import AdminPanel from './components/AdminPanel/AdminPanel';
import Callback from './Callback';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact component={Survey} />
					<Route path="/admin" component={AdminPanel} />
					<Route exact path='/callback' component={Callback}/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;

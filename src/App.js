import React from 'react';
import  Survey  from './components/Survey/Survey';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
         <Route path="/" exact>
            <Survey />
          </Route>
          <Route path="/login">
            {/* <LoginPanel /> */}
          </Route>
          <Route path="/admin">
            {/* <AdminPanel /> */}
          </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;

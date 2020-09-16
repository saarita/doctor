import React from 'react';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from './Home';
import { Doctor } from './Doctor';
import { Hospital } from './Hospital';
import Sidebar from './components/SideBar';

function App() {
  return (
    <React.Fragment>
      <Router>
        
        <Sidebar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/ doctor" component={Doctor} />
          <Route path="/ hospital" component={Hospital} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
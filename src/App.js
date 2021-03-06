import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
import Login from './frontend/componets/Login';
import Dashboard from './frontend/componets/Dashboard';
import Home from './frontend/componets/Home';
import PrivateRoute from './utilities/PrivateRoute';
import PublicRoute from './utilities/PublicRoute';
import Upload from './frontend/componets/Upload'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>        
          <div className="header">
            <NavLink exact activeClassName = 'active' to ='/'>Home</NavLink>
            <NavLink exact activeClassName = 'active' to ='/login'>Login</NavLink> <small>(Access without token only)</small>
            <NavLink exact activeClassName = 'active' to ='/dashboard'>Dashboard</NavLink><small>(Access with token only)</small>
            <NavLink exact activeClassName = 'active' to ='/upload'>Upload</NavLink>
          </div>
          <div className="content">
              <Switch>
                <Route exact path='/' component={Home} />
                <PublicRoute path='/login' component={Login} />
                <PrivateRoute path='/dashboard' component={Dashboard} />
                <Route path='/upload' component={Upload} />
              </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

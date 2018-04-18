import React, { Component } from 'react';
import {Route, NavLink, Switch, Router } from "react-router-dom";
import Home from '../../containers/home';
import './style.css';
import LogIn from '../../containers/logIn/logIn.js';

class Main extends Component {

    render(){
        return(
        <Router>
         <div id="main">
          <Switch>
           <Route path="/" component={Home} />
           <Route path="/login" component={LogIn} />
          </Switch>
         <NavLink to="/" component={Home}>proba</NavLink>
         <NavLink to="/login" component={LogIn}>LogIn</NavLink>
         </div>
        </Router>
    )
    }
}

export default Main;
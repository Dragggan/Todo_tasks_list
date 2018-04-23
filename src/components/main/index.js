import React, { Component } from 'react';
import {Route, NavLink, Switch, BrowserRouter  } from "react-router-dom";
import Home from '../../containers/home';
import LogIn from '../../containers/logIn/logIn.js';
import PrivateRoute from '../PrivateRoute'
import './style.css';
import { Provider, connect } from 'react-redux';

class Main extends Component {

    render(){
        return (
          <BrowserRouter>
         <div id="main">
          <Switch>
           <PrivateRoute exact  path="/" component={Home} />
           <Route exact  path="/login" component={LogIn} />
          </Switch>
         </div>
          </BrowserRouter>
    )
    }
}
export default Main;
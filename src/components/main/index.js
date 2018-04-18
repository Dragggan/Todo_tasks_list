import React, { Component } from 'react';
import {Route, NavLink, Switch, BrowserRouter  } from "react-router-dom";
import Home from '../../containers/home';
import LogIn from '../../containers/logIn/logIn.js';
import './style.css';
import { Provider, connect } from 'react-redux';

class Main extends Component {

    render(){
        return (

        <BrowserRouter>
         <div id="main">

         <NavLink to="/" >home</NavLink>
         <NavLink to="/login" >LogIn</NavLink>
          <Switch>
           <Route exact  path="/" component={Home} />
           <Route exact  path="/login" component={LogIn} />
          </Switch>

         </div>
        </BrowserRouter>

    )
    }
}

export default Main;
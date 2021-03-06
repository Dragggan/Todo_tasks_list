import React, { Component } from 'react';
import {Route, NavLink, Switch, BrowserRouter  } from "react-router-dom";
import { Provider, connect } from 'react-redux';

import Home from '../../containers/home';
import LogIn from '../../containers/logIn/logIn.js';
import PrivateRoute from '../PrivateRoute';
import defaultPage from '../../containers/defaultPage/defaultPage.js';
import {PATH} from "../../const"
import './style.css';


class Main extends Component {
    render(){
        return (
         <div id="main">
          <Switch>
           <PrivateRoute exact  path={PATH+"/"}  component={Home} />
           <Route exact  path={PATH+"/login"} component={LogIn} />
            {/*  <Route render={()=>(<h1>404Not found</h1>)} />*/}
          </Switch>
         </div>
      )
    }
}
export default Main;
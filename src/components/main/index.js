import React, { Component } from 'react';
import {Route, Link,Switch,Router } from "react-router-dom";
import Home from '../../containers/home';
import './style.css';


class Main extends Component {

    render(){
        return(
        <Router>
         <div id="main">
          <Route path="/" component={Home} />
          <Route path="/login" component={Home} />

         </div>
        </Router>
    )
    }
}

export default Main;
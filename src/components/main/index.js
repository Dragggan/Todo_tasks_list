import React, { Component } from 'react';
import {Route, Link } from "react-router-dom";
import Home from '../../containers/home'
import './style.css'


class Main extends Component{

    render(){
        return(
        <div id="main">
            <Route path="/" component={Home} />
        </div>
    )
    }
}

export default Main
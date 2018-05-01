import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import { connect } from "react-redux";
import { isAuth } from "../../actions";
import {PATH} from "../../const"
import './style.css';

const mapDispatchToProps = dispatch => {
  return {
    isAuth: flag => dispatch(isAuth(flag))
  };
};

const mapStateToProps = state => {
  return { auth: state.auth };
};

const ConnectedLogOut = withRouter(

    ({history,...props})=>props.auth.isAuthenticated ? (
        <div id="logOut">
        <button className="logOut"
        onClick={()=>{
            props.isAuth(false);
            history.push(PATH+"/login")}}>Sign Out</button>
        </div>
        ):
    null
    
    

);
    

const LogOut =connect(mapStateToProps,mapDispatchToProps)(ConnectedLogOut)
export default withRouter(LogOut);


import React, { Component } from 'react';
import {
  withRouter
} from "react-router-dom";

import { connect } from "react-redux";
import { isAuth } from "../../actions";

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
        <div>
        <button  
        onClick={()=>{
            props.isAuth(false);
            history.push("/login")}}>SignOut</button>
        </div>
        ):
    null
    
    

);
    

const LogOut =connect(mapStateToProps,mapDispatchToProps)(ConnectedLogOut)
export default withRouter(LogOut);


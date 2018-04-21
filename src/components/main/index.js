import React, { Component } from 'react';
import {Route, NavLink,Link, Switch, BrowserRouter as Router, Redirect, withRouter} from "react-router-dom";
import Home from '../../containers/home';
import LogIn from '../../containers/logIn/logIn.js';
 import defaultPage from '../../containers/defaultPage/defaultPage.js';
import './style.css';
import { Provider, connect } from 'react-redux';
import Babel from 'babel-preset-env';


const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;








class Main extends Component{
constructor(props){
 super(props);
}



   /*{/!*<BrowserRouter>*!/}
    {/!*<div id="main">*!/}
     {/!*<NavLink to="/login"> public</NavLink>*!/}
     {/!*<NavLink to="/home">home</NavLink>*!/}
     {/!*<AuthButton/>*!/}
     {/!*<Switch>*!/}

      {/!*<Route path="/login" component={LogIn}/>*!/}
      {/!*<PrivateRoute path='/home' component={Home}/>*!/}
      {/!*!/!*<Route path='/' component={defaultPage}/>*!/!*!/}
     {/!*</Switch>*!/}
    {/!*</div>*!/}
   {/!*</BrowserRouter>*!/}
 {/!*)*!/}
{/!*}*!/}*/

/* const AuthExample = () => (*/







render(){

 const PrivateRoute = ({ component: Component, ...rest }) => (
   <Route
     {...rest}
     render={props =>
       fakeAuth.isAuthenticated ? (
         <Component {...props} />
       ) : (
         <Redirect
           to={{
            pathname: "/login",
            state: { from: props.location }
           }}
         />
       )
     }
   />
 );



 const AuthButton = withRouter(
   ({ history }) =>
     fakeAuth.isAuthenticated ? (
       <p>
        Welcome!{" "}
        <button
          onClick={() => {
           fakeAuth.signout(() => history.push("/"));
          }}
        >
         Sign out
        </button>
       </p>
     ) : (
       <p>You are not logged in.</p>
     )
 );

 const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
   this.isAuthenticated = true;
   setTimeout(cb, 100); // fake async
  },
  signout(cb) {
   this.isAuthenticated = false;
   setTimeout(cb, 100);
  }
 };







 return (
   <Router>
    <div>
     <AuthButton />
     <ul>
      <li>
       <Link to="/public">Public Page</Link>
      </li>
      <li>
       <Link to="/protected">Protected Page</Link>
      </li>
     </ul>
     <Route path="/public" component={Public} />
     <Route path="/login" component={LogIn} />
     <PrivateRoute path="/protected" component={Protected} />
    </div>
   </Router>
 )
}






    };






export default Main;
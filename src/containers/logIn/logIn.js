import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {isAuth} from "../../actions";
import './css.css';
import auth from '../../components/auth'

const mapDispatchToProps = dispatch => {
 return {
  isAuth: flag => dispatch(isAuth(flag)),
 };
};

const mapStateToProps = state => {

 return {auth: state.auth};

 return { auth: state.auth,
  admins:state.admins };

};

class ConnectedLogIn extends Component {
 constructor(props) {
  super(props);
  this.state = {
   email: '',
   password: '',
   mesage: '',

  }
 }



 /* Validating email adress*/


 signUp() {

  const email = this.state.email;
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(email)) {
   console.log("sve true");
   this.props.isAuth(true);
  }
  else {
   console.log("not valid email");
   for (var i=0;i<this.props.admins.length;i++){
    if (this.props.admins[i].email==this.state.email && this.props.admins[i].password==this.state.password){
     this.props.isAuth(true);
     return;
    }
   }


  }
 }

 render() {
  if(this.props.auth.isAuthenticated) {
   return <Redirect to={{
    pathname: '/',
   }}
   />
  }
  return (
    <form>
     <h2>Sign In</h2>
     <div className="group">
      <input
        type="text"
        required="required"
        onChange={(event) => this.setState({email: event.target.value})}
      />
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Email</label>
     </div>
     <div className="group">
      <input

        type="password"
        required="required"
        onChange={(event) => this.setState({password: event.target.value})}
      />
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>password</label>
     </div>


     <div className="btn-box">
      <button className="btn btn-submit"
              type="button"
              onClick={() => this.signUp()}>LogIn
      </button>
     </div>
    </form>




  );
 }

}

const LogIn = connect(mapStateToProps, mapDispatchToProps)(ConnectedLogIn);
export default LogIn;
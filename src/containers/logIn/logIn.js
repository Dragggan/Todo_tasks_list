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
 
   
   for (var i=0;i<this.props.admins.length;i++){
    if (this.props.admins[i].email==this.state.email && re.test(email) && this.props.admins[i].password==this.state.password){
     this.props.isAuth(true);
     return;
    }
    console.log("not valid email");
     this.inputPass.value = '';
      this.inputEmail.value = '';
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
      ref={(a) => this.inputEmail = a}
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
        ref={(a) => this.inputPass = a}
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
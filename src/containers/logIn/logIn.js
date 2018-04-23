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
<<<<<<< HEAD
 return {auth: state.auth};
=======
  return { auth: state.auth,
            admins:state.admins };
>>>>>>> 806a9a3d17529c0f4b667f4db2e4c846fbea66f6
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

<<<<<<< HEAD
 signUp() {
  /* Validating email adress*/
  const email = this.state.email;
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(email)) {
   console.log("sve true");
   this.props.isAuth(true);
  }
  else {
   console.log("ko");
=======
 signUp(e) {

// /* Validating email adress*/
//   const email = this.state.email;
//   // console.log(this.state.email);
//   const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if(re.test(email)) {
//    console.log("sve true");
//   }
//   else {
//    this.setState((prevProps) => {
//     return console.log("aaaa"+ prevProps);
//    });
//    console.log(this.state.mesage);

//   }


for (var i=0;i<this.props.admins.length;i++){
  if (this.props.admins[i].email==this.state.email && this.props.admins[i].password==this.state.password){
    this.props.isAuth(true);
    return;
  }
}
>>>>>>> 806a9a3d17529c0f4b667f4db2e4c846fbea66f6

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

<<<<<<< HEAD
     <div className="btn-box">
      <button className="btn btn-submit"
              type="submit"
              onClick={() => this.signUp()}>LogIn
      </button>
     </div>
    </form>
=======
      <div className="btn-box">
       <button className="btn btn-submit"
               type="button"
               onClick={() => this.signUp()}>LogIn</button>
      </div>
  </form>
>>>>>>> 806a9a3d17529c0f4b667f4db2e4c846fbea66f6

  );
 }

}

const LogIn = connect(mapStateToProps, mapDispatchToProps)(ConnectedLogIn);
export default LogIn;


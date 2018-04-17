import React, {Component} from 'react';
import someCSS from './SignIn.css';

class SignIn extends Component {
 constructor(props) {
  super(props);
  this.state = {
   email: '',
   password: '',
   mesage: ''
  }
 }

 signUp() {
/* Validating email adress*/
  var email = this.state.email;
  console.log(this.state.email);
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(email)) {
   console.log("sve true");
  }
  else {
   this.setState({mesage : "not a valid email"})
   console.log(this.state.mesage);
  }

 }

 render() {
  return (
    <div className="form-inline">
     <h2 style={{color: 'red'}}>Sign In </h2>
     <div className="form-group">
      <input className="form-control"
             type="text"
             placeholder="email"
             onChange={(event) => this.setState({email: event.target.value})}
      />
      <input className="form-control"
             type="password"
             placeholder="password"
             onChange={(event) => this.setState({password: event.target.value})}
      />
      <input type="button"
             value="Sign In"
             onClick={() => this.signUp()}

      />
     </div>
    </div>
  );
 }
}

export default SignIn;


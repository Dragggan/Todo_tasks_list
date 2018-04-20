import React, {Component} from 'react';
import './css.css';

class LogIn extends Component {
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
  const email = this.state.email;
  // console.log(this.state.email);
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(email)) {
   console.log("sve true");
  }
  else {
   this.setState((prevProps) => {
    return console.log("aaaa"+ prevProps);
   });
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

export default LogIn;


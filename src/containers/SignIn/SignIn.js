import React, {Component} from 'react';
import logInPage from './SignIn.css';

class SignIn extends Component {
 constructor(props) {
  super(props);
  this.state={email: '',
  password :''
  }
 }

 signUp(){
  console.log(this.state);
 }
 
 render() {
  return (
    <div className="form-inline">
     <h2 style={{color:'red'}}>Sign In </h2>
     <div className="form-group" >
      <input className="form-control"
             type="text"
             placeholder="email"
             onChange={ (event) => this.setState({email : event.target.value} ) }
      />
      <input className="form-control"
             type="password"
             placeholder="password"
             onChange={ (event) => this.setState({password : event.target.value} ) }
      />
      <input type="button"
             value="Sign In"
             onClick={ () => this.signUp()}

      />
     </div>
    </div>
  );
 }
}

export default SignIn;


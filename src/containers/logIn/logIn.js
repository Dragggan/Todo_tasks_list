import React, {Component} from 'react';
/*import Main from '../../containers/logIn/index.js';*/
import './css.css';

class LogIn extends Component {
 constructor(props) {
  super(props);
  this.state = {
   email: '',
   password: '',
   mesage: '',
   redirectToReferrer: false
  }
 }

 login() {
  fakeAuth.authenticate(() => {
   this.setState({ redirectToReferrer: true });
  });
 };


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
    return console.log("aaaa" + prevProps);
   });
   console.log(this.state.mesage);
  }
 }





 render() {
  const { from } = this.props.location.state || { from: { pathname: "/" } };
  const { redirectToReferrer } = this.state;


  if (redirectToReferrer) {
   return <Redirect to={from} />;
  }

  return (
    <form>
     <h2>Sign In</h2>
     <button onClick={this.login}>Log in</button>
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
              type="submit"
              onClick={() => this.signUp()}>LogIn
      </button>
     </div>
    </form>

  );
 }

}

export default LogIn;


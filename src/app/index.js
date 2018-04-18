import React, { Component } from 'react';
<<<<<<< HEAD
import SignIn from '../containers/signIn/SignIn.js';
import AddTask from '../containers/addTask'

class App extends Component {
    


    	render() {
    		return(
    			<div>
    				<h1>ToDoApp</h1>
             <div className="test">Testing login
              <SignIn />
             </div>
=======
import { BrowserRouter as Router } from "react-router-dom";

import Main from '../components/main'
>>>>>>> 2adacd29e3dc293abace7997dd1c810d83a16b7d

class App extends Component {

  render() {
    return (
      <div>
        <Router>
        <div>
            
            <Main/>
            
          </div>
        </Router>
      </div>
      
    );
  }
}

export default App;


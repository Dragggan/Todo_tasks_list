import React, { Component } from 'react';
import Main from '../components/main/index.js';
import Home from '../containers/home/index.js';


import LogIn from '../containers/logIn/logIn.js';
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
    
   
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
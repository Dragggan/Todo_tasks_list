import React, {Component} from 'react';
import Main from '../components/main/index.js';
import Home from '../containers/home/index.js';
<<<<<<< HEAD
=======
import Header from '../components/header';
import Footer from '../components/footer';
>>>>>>> 806a9a3d17529c0f4b667f4db2e4c846fbea66f6

import LogIn from '../containers/logIn/logIn.js';
import {BrowserRouter as Router} from "react-router-dom";

class App extends React.Component {
<<<<<<< HEAD
 render() {
  return (
    <div>
       <Main/>
    </div>
  );
 }
=======
    
   
        render() {
    return (
      <div>
        <Router>
        <div>
           <Header/>
            <Main/>
            <Footer/>
           
          </div>
        </Router>
      </div>
      
    );
  }
>>>>>>> 806a9a3d17529c0f4b667f4db2e4c846fbea66f6
}
export default App;
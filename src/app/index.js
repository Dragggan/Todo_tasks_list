import React, {Component} from 'react';
import Main from '../components/main/index.js';
import Home from '../containers/home/index.js';
<<<<<<< HEAD
import Header from '../components/header';
import Footer from '../components/footer';
=======


import Header from '../components/header';
import Footer from '../components/footer';


>>>>>>> 6c817188f229f8b7347db86f7990ac676cc10cc0
import LogIn from '../containers/logIn/logIn.js';
import {BrowserRouter as Router} from "react-router-dom";


class App extends React.Component {

 render() {
  return (
    <div>
       <Main/>
    </div>
  );
 }

    
   
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

}
export default App;
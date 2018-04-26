import React, {Component} from 'react';
import Main from '../components/main/index.js';
import Header from '../components/header';
import Footer from '../components/footer';
import { hot } from 'react-hot-loader';
import './style.css'


import {BrowserRouter as Router} from "react-router-dom";

class App extends React.Component {
// /* render() {
//   return (
//     <div>
//      <Main/>
//     </div>
//   );
//  }*/

 render() {
  return (
    <div id="app">
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
export default hot(module)(App);
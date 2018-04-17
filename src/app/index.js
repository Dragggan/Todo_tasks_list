import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Main from '../components/main'

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


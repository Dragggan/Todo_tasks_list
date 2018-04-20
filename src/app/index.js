import React, { Component } from 'react';
import Main from '../components/main/index.js';
import Home from '../containers/home/index.js';
import LogIn from '../containers/logIn/logIn.js';

class App extends React.Component {
    
   
    	render() {
    		return(
    			<div>
					{/*<LogIn/>*/}
                <Main/>

    			</div>

    );
}
}

export default App;
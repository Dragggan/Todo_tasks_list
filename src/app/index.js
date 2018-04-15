import React, { Component } from 'react';
import LogInPage from '../containers/logInPage/logInPage.js';

class App extends React.Component {
    
   
    	render() {
    		return(
    			<div>
    				<h1>ToDoApp</h1>
             <LogInPage />
    			</div>

    );
}
}

export default App;
import React, { Component } from 'react';
import SignIn from '../containers/logIn/logIn.js';

class App extends React.Component {
    
   
    	render() {
    		return(
    			<div>
    				<h1>ToDoApp</h1>
					<SignIn/>
    			</div>

    );
}
}

export default App;
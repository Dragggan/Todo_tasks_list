import React, { Component } from 'react';
import SignIn from '../containers/logIn/logIn.js';
 // import Main from '../components/main/index.js';

class App extends React.Component {
    
   
    	render() {
    		return(
    			<div>
    				<h1>ToDoApp</h1>
					<SignIn/>
					{/*<Main/>*/}
    			</div>

    );
}
}

export default App;
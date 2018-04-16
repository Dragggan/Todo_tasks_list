import React, { Component } from 'react';
import LogInPage from '../containers/logInPage/logInPage.js';
import AddTask from '../containers/addTask'

class App extends React.Component {
    
   
    	render() {
    		return(
    			<div>
    				<h1>ToDoApp</h1>
             <LogInPage />
             <AddTask />
             
    			</div>

    );
}
}

export default App;
import React, { Component } from 'react';
import SignIn from '../containers/signIn/SignIn.js';
import AddTask from '../containers/addTask'

class App extends React.Component {
    
   
    	render() {
    		return(
    			<div>
    				<h1>ToDoApp</h1>
             <div className="test">Testing login
              <SignIn />
             </div>

             <AddTask />
             
    			</div>

    );
}
}

export default App;
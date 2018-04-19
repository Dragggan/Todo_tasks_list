//ko je raspolozen moze da razmislja kako da se pojedinacni task lepse renderuje, ovo je samo najosnovnije za pocetak

import React, {Component} from 'react'
import './style.css';

class ToDoItem extends Component{
    render(){
        return(
            <div className="container">
            <div className="theList">
         
        <div id="id"> Id: {this.props.item.id} </div>
        <div id="title"> Title: {this.props.item.title} </div>
        <div id="completed"> Completed: {this.props.item.completed? 'Yes ':'No '} </div>
</div>
         <input type="submit"  value="Delete Task" className="btn" /> {/*previdjeno dugme koje bi brisalo task, mozda ne moramo ovako da implementiramo brisanje taska*/}
         <input type="submit"  value="Show Details" className="btn" />
           
           

            </div>)

            

    }
}

export default ToDoItem
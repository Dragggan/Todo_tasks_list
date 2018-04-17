//ko je raspolozen moze da razmislja kako da se pojedinacni task lepse renderuje, ovo je samo najosnovnije za pocetak

import React, {Component} from 'react'


class ToDoItem extends Component{
    render(){
        return(
            <div>
         Id: {this.props.item.id}; Title: {this.props.item.title}; Completed: {this.props.item.completed? 'Yes ':'No '}

         <input type="submit"  value="Delete Task"/> {/*previdjeno dugme koje bi brisalo task, mozda ne moramo ovako da implementiramo brisanje taska*/}
            </div>)

    }
}

export default ToDoItem
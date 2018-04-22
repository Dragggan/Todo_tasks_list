//ko je raspolozen moze da razmislja kako da se pojedinacni task lepse renderuje, ovo je samo najosnovnije za pocetak

import React, {Component} from 'react'
import './style.css';
import { connect } from "react-redux";
import { chngList } from "../../actions";
import TaskDetails from "../taskDetails"

const mapDispatchToProps = dispatch => {
  return {
    chngList: list => dispatch(chngList(list)),
  };
};

const mapStateToProps = state => {
  return { toDoList: state.toDoList };
};

class ConnectedTask extends Component{
constructor(props){
    super(props);
    

    this.deleteTask=this.deleteTask.bind(this);
    this.showDetails=this.showDetails.bind(this);
}

deleteTask(){
    const isNotId=task=>task.id!==this.props.item.id;
    const updatedList= this.props.toDoList.filter(isNotId)
    this.props.chngList(updatedList);
    console.log("ToDoItem#deleteTask")
}

showDetails(){
  console.log("showDetails#ToDoItem");
  const updatedList=this.props.toDoList.map(item=>{
    if(item.id==this.props.item.id){
      return Object.assign({},item,{showDetails:true})
    }
    return item
  });
  this.props.chngList(updatedList);

}

    render(){
        return(
            <div className="container">
            <TaskDetails showDetails={this.props.item.showDetails} task={this.props.item}/>
            <div className="theList">
         
        <div id="id"> Id: {this.props.item.id} </div>
        <div id="title"> Title: {this.props.item.title} </div>
        <div id="completed"> Completed: {this.props.item.completed? 'Yes ':'No '} </div>
        <div id="assignee">Assignee: {this.props.item.userId}</div>
</div>
         <input type="submit" onClick={this.deleteTask} value="Delete Task" className="btn" /> {/*previdjeno dugme koje bi brisalo task, mozda ne moramo ovako da implementiramo brisanje taska*/}
         <input type="submit"  value="Show Details" className="btn" onClick={this.showDetails}/>
           
           

            </div>)

            

    }
}
const Task=connect(mapStateToProps,mapDispatchToProps)(ConnectedTask)
export default Task
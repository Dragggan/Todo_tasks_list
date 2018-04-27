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
  return { toDoList: state.toDoList,
            users:state.users };
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
      if(this.props.users.length>0){
      const selectedUser=this.props.users.filter(user=>user.id==this.props.item.userId)[0]
        return(
      
  <div className="table-row">
  <TaskDetails showDetails={this.props.item.showDetails} task={this.props.item}/>
        <span style={{width:'5%'}}> {this.props.item.id} </span>
        <span style={{width:'40%'}}> {this.props.item.title} </span>
        <span style={{width:'10%'}}> {this.props.item.completed? 'Yes ':'No '} </span>
        <span style={{width:'20%'}}> {selectedUser.username}</span>
        <input type="submit" onClick={this.deleteTask} value="Delete Task"  className="taskButton"/>
        <input type="submit"  value="Edit Task" onClick={this.showDetails} className="taskButton"/>
  </div>
  
   
            )
       
    }
    return null
  }

}
const Task=connect(mapStateToProps,mapDispatchToProps)(ConnectedTask)
export default Task
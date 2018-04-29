//ko je raspolozen moze da razmislja kako da se pojedinacni task lepse renderuje, ovo je samo najosnovnije za pocetak

import React, {Component} from 'react'
import './style.css';
import { connect } from "react-redux";
import { chngList, chngUsers } from "../../actions";
import TaskDetails from "../taskDetails";
import AssigneeDetails from "../assigneeDetails";

const mapDispatchToProps = dispatch => {
  return {
    chngList: list => dispatch(chngList(list)),
    chngUsers: list => dispatch(chngUsers(list)),
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
    this.showUserDetails=this.showUserDetails.bind(this);
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
showUserDetails(){
  const updatedList=this.props.users.map(item=>{
    if(item.id==this.props.item.userId){
      return Object.assign({},item,{showDetails:true})
    }
    return item
  });
  this.props.chngUsers(updatedList);

}

    render(){
      if(this.props.users.length>0){
      const selectedUser=this.props.users.filter(user=>user.id==this.props.item.userId)[0]
        return(
      
  <div className="table-row">
  <AssigneeDetails id={this.props.item.userId}/>
  <TaskDetails showDetails={this.props.item.showDetails} task={this.props.item}/>
        
        <div style={{width:'40%'}}> <div id="taskId" style={{width:'30px'}}>{this.props.item.id} </div> {this.props.item.title} </div>
        <span style={{width:'150px'}} style={!this.props.item.completed?{fontWeight:'bold'}:{color:'#2196F3'}}> {this.props.item.completed? 'Yes ':'No '} </span>
        <span style={{width:'150px'}} id="task-assignee" onClick={this.showUserDetails}> {selectedUser.username}</span>
        <input style={{width:'85px'}} type="submit"  value="Edit Task" onClick={this.showDetails} className="taskButton"/>
        <input style={{width:'85px'}} type="submit" onClick={this.deleteTask} value="Delete Task"  className="taskButton"/>
        
  </div>
  
   
            )
       
    }
    return null
  }

}
const Task=connect(mapStateToProps,mapDispatchToProps)(ConnectedTask)
export default Task
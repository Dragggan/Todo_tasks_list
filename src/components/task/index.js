import React, {Component} from 'react'
import { connect } from "react-redux";

import './style.css';
import { chngList, chngUsers } from "../../actions";
import TaskDetails from "../taskDetails";
import AssigneeDetails from "../assigneeDetails";

//defining that todo list and users list from store will be changed by this component
const mapDispatchToProps = dispatch => {
  return {
    chngList: list => dispatch(chngList(list)),
    chngUsers: list => dispatch(chngUsers(list)),
  };
};

//taking todo list and users list from store to become part of component props
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
    const updatedList= this.props.toDoList.filter(isNotId)//filtering list to exclude clicked task
    this.props.chngList(updatedList);//calling action that changes todo list
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
          <section className="table-row">
            <AssigneeDetails id={this.props.item.userId}/>
            <TaskDetails showDetails={this.props.item.showDetails} task={this.props.item}/>
            <div style={{width:'40%'}}> <div id="taskId" style={{width:'30px'}}>{this.props.item.id} </div> {this.props.item.title} </div>
            <span style={{width:'150px'}} style={!this.props.item.completed?{fontWeight:'bold'}:{color:null}}> {this.props.item.completed? 'Yes ':'No '} </span>
            <span style={{width:'150px'}} id="task-assignee" onClick={this.showUserDetails}> {selectedUser.username}</span>
            <input style={{width:'85px'}} type="submit"  value="Edit Task" onClick={this.showDetails} className="taskButton"/>
            <input style={{width:'85px'}} type="submit" onClick={this.deleteTask} value="Delete Task"  className="taskButton"/>
          </section>
            )
    }
    return null
  }
}
const Task=connect(mapStateToProps,mapDispatchToProps)(ConnectedTask)
export default Task
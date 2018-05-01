import React, { Component }  from 'react';
import { connect } from "react-redux";

import './style.css';
import {addTask, chngId} from "../../actions"



const mapDispatchToProps = dispatch => {
  return {
    addTask: task => dispatch(addTask(task)),
    chngId: id => dispatch(chngId(id)),
  };
};

const mapStateToProps = state => {
  return { toDoList: state.toDoList,
            idCounter: state.idCounter, 
            users: state.users
          };
};

class ConnectedAddTask extends Component {
  constructor(props) {
    super(props);
    this.addTask = this.addTask.bind(this);
  }

  addTask() {
    if (this.inputTask.value !== '' && this.props.users.length>0) {
      var username=document.getElementById("assigneeSelect").value;
      var selectedUser=this.props.users.filter(user=>user.username==username)[0];
      console.log(selectedUser);
      var id=this.props.idCounter+1;
      var taskArray={
        title: this.inputTask.value,
        id: id, 
        completed: false,
        userId: selectedUser.id,
      };
      var users=this.props.users;
      console.log(users)
      this.inputTask.value = '';
      this.props.addTask(taskArray);
      this.props.chngId(id);
    }
    //e.preventDefault();
  }

  render() {
    return (
      <div id="addTask">
        <input ref={(a) => this.inputTask = a}
              placeholder="please enter your task"  className="inputAddTask">
        </input>
        <select id="assigneeSelect">
            {this.props.users.map((user)=><option
            key={user.id}>{user.username}</option>)}
        </select>
        <button type="button" onClick={this.addTask} className="buttonAddTask">Add to Task List</button>
      </div>
    );
  }
}

const AddTask=connect(mapStateToProps,mapDispatchToProps)(ConnectedAddTask)
export default AddTask;



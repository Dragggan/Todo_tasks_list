import React, { Component }  from 'react';
import './style.css';
import {addTask, chngId} from "../../actions"
import { connect } from "react-redux";



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
      var selectedUser=this.props.users.filter(user=>user.username=='bret')[0];
      console.log(selectedUser);
      
      var id=this.props.idCounter+1;
      var taskArray={
        title: this.inputTask.value,
        id: id, 
        completed: false,
        userId: 1,
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
      <div>
          <form>
            <input ref={(a) => this.inputTask = a}
              placeholder="please enter your task" >
            </input>
            <select id="assigneeSelect">
           
              {this.props.users.map((user)=><option

                key={user.id}>{user.username}</option>)}
    
            </select>
           
            <button type="button" onClick={this.addTask}>Add to Task List</button>
          </form>
      </div>
    );
  }
}

const AddTask=connect(mapStateToProps,mapDispatchToProps)(ConnectedAddTask)
export default AddTask;



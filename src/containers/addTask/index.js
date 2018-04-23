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

  addTask(e) {
    if (this.inputTask.value !== '') {
      var id=this.props.idCounter+1;
      var taskArray={
        title: this.inputTask.value,
        id: id,
        completed: false,
        userId: document.getElementById("assignee").value
      };
      var users=this.props.users;
      console.log(users)
      this.inputTask.value = '';
      this.props.addTask(taskArray);
      this.props.chngId(id);
    }
   

    e.preventDefault();

    
  }

  render() {
    return (
      <div>
          <form onSubmit={this.addTask}>
            <input ref={(a) => this.inputTask = a}
              placeholder="please enter your task" className="todo-input" >
            </input>
            <div>

            </div>
            <button type="submit" className="todo-add" >Add to Task List</button>
          </form>
      </div>
    );
  }
}

const AddTask=connect(mapStateToProps,mapDispatchToProps)(ConnectedAddTask)
export default AddTask;



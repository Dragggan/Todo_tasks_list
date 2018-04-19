import React, { Component }  from 'react';
import './style.css';
import {addTask} from "../../actions"
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
  return {
    addTask: task => dispatch(addTask(task)),
  
  };
};

class ConnectedAddTask extends Component {
  constructor(props) {
    super(props);

    this.addTask = this.addTask.bind(this);

  }

  addTask(e) {

    if (this.inputTask.value !== '') {
      var taskArray={
        userId: 5,
        title: this.inputTask.value,
        id: 21,
        completed: false
      };

      this.inputTask.value = '';
    }
    console.log(taskArray);

    e.preventDefault();

    this.props.addTask(taskArray);
  }

  render() {
    return (
      <div>
          <form onSubmit={this.addTask}>
            <input ref={(a) => this.inputTask = a}
              placeholder="please enter your task" className="todo-input" >
            </input>
            <button type="submit" className="todo-add" >Add to Task List</button>
          </form>
      </div>
    );
  }
}

const AddTask=connect(null,mapDispatchToProps)(ConnectedAddTask)
export default AddTask;



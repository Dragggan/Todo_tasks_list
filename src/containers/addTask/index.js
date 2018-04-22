import React, { Component }  from 'react';
import './style.css';
import {addTask} from "../../actions"
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
  return {
    addTask: task => dispatch(addTask(task)),
  
  };
};
const mapStateToProps = state => {
  return { toDoList: state.toDoList };
};

class ConnectedAddTask extends Component {
  constructor(props) {
    super(props);

    this.addTask = this.addTask.bind(this);

  }

  addTask(e) {
    if (this.inputTask.value !== '') {
      var id=this.props.toDoList.length+1;
      var taskArray={
        title: this.inputTask.value,
        id: id,
        completed: false,
        userId: document.getElementById("assignee").value
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
            <select id="assignee"> 
   <option>Djuza</option>
   <option>Ivana</option>
   <option>Rada</option>
</select> 
            <button type="submit" className="todo-add" >Add to Task List</button>
          </form>
      </div>
    );
  }
}

const AddTask=connect(mapStateToProps,mapDispatchToProps)(ConnectedAddTask)
export default AddTask;



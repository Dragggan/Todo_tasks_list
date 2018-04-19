import React, { Component }  from 'react';
import './style.css';


class AddTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };

    this.addTask = this.addTask.bind(this);

  }

  addTask(e) {

    if (this.inputTask.value !== '') {
      var taskArray={
        text: this.inputTask.value,
        id: []
      };

      this.setState((prevState) => {
      return { 
        tasks: prevState.tasks.concat(taskArray) 
      };
    });

      this.inputTask.value = '';
    }
    console.log(taskArray);

    e.preventDefault();
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
          <div>
        <ToDoList task={this.state.tasks} />
        </div>
      </div>
    );
  }
}
export default AddTask;

class ToDoList extends Component{

createTasks(task) {
    return <li id={task.id}>{task.text}</li>
  }

  render() {
    var task = this.props.task;
    var listItems = task.map(this.createTasks);
 
    return (
      <ul>
          {listItems}
      </ul>
    );
  }
};


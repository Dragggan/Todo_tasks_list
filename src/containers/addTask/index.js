import React, { Component }  from 'react';


class AddTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addTask = this.addTask.bind(this);

  }

  addTask(e) {

    const itemArray = this.state.items;
    if (this.inputTask.value !== '') {
      itemArray.push({
        text: this.inputTask.value,
        id: itemArray.length
      });

      this.inputTask.value = '';
    }
    console.log(itemArray);

    e.preventDefault();
  }

  render() {
    return (
      <div>
          <form onSubmit={this.addTask}>
            <input ref={(a) => this.inputTask = a}
              placeholder="please enter your task">
            </input>
            <button type="submit">Add to Task List</button>
          </form>
          <div>
        
        </div>
      </div>
    );
  }
}
export default AddTask;

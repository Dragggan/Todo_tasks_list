//Task Component needs to have onClick button and OnClick event handler
//Component still not connected to the rest of the code
//missing logic from component that is calling <TaskDetails/>

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class TaskDetails extends Component {
  constructor(props) {
    super(props);
    this.modalRoot = document.getElementById('modal-root');
  }

  render() {
    if(this.props.showDetails){
    return ReactDOM.createPortal(
      <div className='modal'>
        <div>id: 1</div>
        <div>description: <input type="text" value="some description"/></div>
      
        <input type="submit" value="save changes"/>
        <input type="submit" value="exit details"/>
      </div>,
      this.modalRoot
    );
  }
  return null
  }
}

export default TaskDetails;
//Task Component needs to have onClick button and OnClick event handler
//Component still not connected to the rest of the code
//missing logic from component that is calling <TaskDetails/>

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { connect } from "react-redux";
import { chngList } from "../../actions";
import './style.css';

const mapDispatchToProps = dispatch => {
  return {
    chngList: list => dispatch(chngList(list)),
  };
};

const mapStateToProps = state => {
  return { toDoList: state.toDoList };
};

class ConnectedTaskDetails extends Component {
  constructor(props) {
    super(props);
    this.exitDetails=this.exitDetails.bind(this);
    this.saveChanges=this.saveChanges.bind(this);
    this.modalRoot = document.getElementById('modal-root');
  }

  saveChanges(e){
    if (this.inputTask.value !== '') {
      var changedDescription=this.inputTask.value;
   
      const updatedList=this.props.toDoList.map(item=>{
    if(item.id==this.props.task.id){
      return Object.assign({},item,{title:changedDescription})
    }
    return item
  });
  this.props.chngList(updatedList);
    

    e.preventDefault();

    
  }
  }


  exitDetails(e){
    e.preventDefault();
    console.log("exitDetails#TaskDetails");
    const updatedList=this.props.toDoList.map(item=>{
    if(item.id==this.props.task.id){
      return Object.assign({},item,{showDetails:false})
    }
    return item
  });
  this.props.chngList(updatedList);
  }

  render() {
    if(this.props.showDetails){
    return ReactDOM.createPortal(
      <div className='modal'>
        <div>id: {this.props.task.id}</div>
        <div>description: <input type="text" defaultValue={this.props.task.title} ref={(a) => this.inputTask = a}/></div>
      
        <button onClick={this.saveChanges}>save changes </button>
        <button onClick={this.exitDetails}>exit details</button>
      </div>,
      this.modalRoot
    );
  }
  return null
  }
}
const TaskDetails=connect(mapStateToProps,mapDispatchToProps)(ConnectedTaskDetails)
export default TaskDetails;
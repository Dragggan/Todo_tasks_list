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
  return { toDoList: state.toDoList,
            users: state.users };
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
      var changedUser=this.selectedUser.value;
      var changedUserId=this.props.users.filter(user=>user.name==changedUser)[0].id;
   
      const updatedList=this.props.toDoList.map(item=>{
    if(item.id==this.props.task.id){
      return Object.assign({},item,{title:changedDescription,
                                    userId:changedUserId,
                                    completed:this.completedTask.value})
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
      const requestedUser=this.props.users.filter(user=>user.id==this.props.task.userId)[0]
      console.log(requestedUser)
    return ReactDOM.createPortal(
      <div className='modal'>
        <div>id: {this.props.task.id}</div>
        <div> <input id ="description" type="text" defaultValue={this.props.task.title} ref={(a) => this.inputTask = a}/></div>
        <div> Assignee: <select id="assignee" selected={requestedUser.name} ref={(a) => this.selectedUser = a}>
           
              {this.props.users.map((user)=><option key={user.id}>{user.name}</option>)}
    
            </select></div>
            
            <div className="inline-field">Completed:<input type="checkbox" id="taskCheck" ref={(a) => this.completedTask = a}/></div>
        <input className="btn" type="submit" value="save changes" onClick={this.saveChanges}/>
        <input className="btn" type ="submit" value ="exit details" onClick={this.exitDetails}/>
      </div>,
      this.modalRoot
    );
  }
  return null
  }
}
const TaskDetails=connect(mapStateToProps,mapDispatchToProps)(ConnectedTaskDetails)
export default TaskDetails;
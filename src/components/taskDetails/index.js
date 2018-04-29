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
    this.state={isCompleted:null}
    this.exitDetails=this.exitDetails.bind(this);
    this.saveChanges=this.saveChanges.bind(this);
    this.completedStatus=this.completedStatus.bind(this);
    this.modalRoot = document.getElementById('modal-root');
  }
componentWillReceiveProps(){
  if(!this.state.isCompleted){
  this.setState({isCompleted:this.props.task.completed})
}
}

completedStatus(){
this.setState({isCompleted:!this.state.isCompleted})
}

  saveChanges(e){
    if (this.inputTask.value !== '') {
      var changedDescription=this.inputTask.value;
      var changedUser=this.selectedUser.value;
      var changedUserId=this.props.users.filter(user=>user.username==changedUser)[0].id;
   
      const updatedList=this.props.toDoList.map(item=>{
    if(item.id==this.props.task.id){
      return Object.assign({},item,{title:changedDescription,
                                    userId:changedUserId,
                                    completed:this.state.isCompleted})
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
        <div id="detailsWrapper">
          <div className="inline-field">
            <div id="showId"><div className="detailsLabel">id: </div>{this.props.task.id}</div>
            <div id="showCompleted"><div className="detailsLabel">Completed:</div>
              <input type="submit" 
                  className="buttonCompleted" 
                  style={this.state.isCompleted?{color:"#2196f3"}:{color:"#ffffff"}}
                  value={this.state.isCompleted?"YES":"NO"} 
                  id="taskCheck" onClick={this.completedStatus}/>
              </div>
          </div>
          <div className="description-field"> <textarea id ="descriptionDetails" type="text" defaultValue={this.props.task.title} ref={(a) => this.inputTask = a}/></div>
          <div className="assigneeSelect"> <div className="detailsLabel">Assignee: </div><select defaultValue={requestedUser.username} ref={(a) => this.selectedUser = a} id="changeUser">
           
              {this.props.users.map((user)=><option key={user.id}>{user.username}</option>)}
    
            </select></div>
            
          <div className="buttonsWrapper">
            <input className="buttonDetails" type="submit" value="save changes" onClick={this.saveChanges}/>
            <input className="buttonDetails" type ="submit" value ="exit details" onClick={this.exitDetails}/>
          </div>
        </div>
      </div>,
      this.modalRoot
    );
  }
  return null
  }
}
const TaskDetails=connect(mapStateToProps,mapDispatchToProps)(ConnectedTaskDetails)
export default TaskDetails;
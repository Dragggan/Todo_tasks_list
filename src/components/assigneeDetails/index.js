//Task Component needs to have onClick button and OnClick event handler
//Component still not connected to the rest of the code
//missing logic from component that is calling <TaskDetails/>

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { connect } from "react-redux";
import { chngUsers } from "../../actions";

import './style.css';

const mapDispatchToProps = dispatch => {
  return {
    chngUsers: list => dispatch(chngUsers(list)),
  };
};

const mapStateToProps = state => {
  return { users: state.users };
};

class ConnectedAssigneeDetails extends Component {
  constructor(props) {
    super(props);
    this.exitDetails=this.exitDetails.bind(this);
    
    this.modalRoot = document.getElementById('modal-root2');
  }

  


  exitDetails(e){
    e.preventDefault();
    console.log("exitDetails#AssigneeDetails");
    const updatedList=this.props.users.map(item=>{
    if(item.id==this.props.id){
      return Object.assign({},item,{showDetails:false})
    }
    return item
  });
  this.props.chngUsers(updatedList);
  }

  render() {
    const requestedUser=this.props.users.filter(user=>user.id==this.props.id)[0];
    if(requestedUser.showDetails){
      
    return ReactDOM.createPortal(
      <div className='modal'>
        <div>name: {requestedUser.name}</div>
        <div>username: {requestedUser.username}</div>
        <div>email: {requestedUser.email}</div>
        <div>website: {requestedUser.website}</div>
        <div>phone: {requestedUser.phone}</div>
      
        
        <button onClick={this.exitDetails}>exit details</button>
      </div>,
      this.modalRoot
    );
  }
  return null
  }
}
const AssigneeDetails=connect(mapStateToProps,mapDispatchToProps)(ConnectedAssigneeDetails)
export default AssigneeDetails;
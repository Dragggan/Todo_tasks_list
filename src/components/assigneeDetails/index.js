
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
      <div className='modal2'>
        <div className="assigneeDetails">name: <div className="assigneeInfo">{requestedUser.name}</div></div>
        <div className="assigneeDetails">username:<div className="assigneeInfo"> {requestedUser.username}</div></div>
        <div className="assigneeDetails">email: <div className="assigneeInfo">{requestedUser.email}</div></div>
        <div className="assigneeDetails">website: <div className="assigneeInfo">{requestedUser.website}</div></div>
        <div className="assigneeDetails">phone: <div className="assigneeInfo">{requestedUser.phone}</div></div>
        <button className="buttonDetails" onClick={this.exitDetails}>exit details</button>
      </div>,
      this.modalRoot
    );
  }
  return null
  }
}
const AssigneeDetails=connect(mapStateToProps,mapDispatchToProps)(ConnectedAssigneeDetails)
export default AssigneeDetails;
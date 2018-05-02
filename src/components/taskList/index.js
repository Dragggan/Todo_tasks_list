import React, {Component} from 'react'
import { connect } from "react-redux"; 

import Task from '../task'
import TaskDetails from '../taskDetails'
import './style.css';


const mapStateToProps = state => {
  return { toDoList: state.toDoList };
};

class ConnectedTaskList extends Component{
    render(){
        if(!this.props.toDoList){
            return <div>Waiting for results</div>// ovo radimo da nam ne pukne aplikacija ako nema nista u store-u
        }
        return (
            <div className="table">
                <div className="table-row">
                    <div style={{width:'40%'}}>
                        <div id="taskId" style={{width:'30px'}}> ID </div> DESCRIPTION 
                    </div>
                    <span style={{width:'150px'}}>DONE</span>
                    <span style={{width:'150px'}}>ASSIGNEE</span>
                    <div style={{width:'130px'}}></div>
                    <div style={{width:'130px'}}></div>
                </div>
            {this.props.toDoList.map((item)=><Task item={item} key={item.id}/>)}
            </div>
            )
    }
}

const TaskList=connect(mapStateToProps)(ConnectedTaskList) 
export default TaskList


//ko je raspolozen moze da razmislja kako da se pojedinacni task lepse renderuje, ovo je samo najosnovnije za pocetak

import React, {Component} from 'react'
import './style.css';
import { connect } from "react-redux";
import { chngList } from "../../actions";
import TaskDetails from "../taskDetails"

const mapDispatchToProps = dispatch => {
  return {
    chngList: list => dispatch(chngList(list)),
  };
};

const mapStateToProps = state => {
  return { toDoList: state.toDoList,
            users:state.users };
};

class ConnectedTask extends Component{
constructor(props){
    super(props);
    

    this.deleteTask=this.deleteTask.bind(this);
    this.showDetails=this.showDetails.bind(this);
}

deleteTask(){
    const isNotId=task=>task.id!==this.props.item.id;
    const updatedList= this.props.toDoList.filter(isNotId)
    this.props.chngList(updatedList);
    console.log("ToDoItem#deleteTask")
}

showDetails(){
  console.log("showDetails#ToDoItem");
  const updatedList=this.props.toDoList.map(item=>{
    if(item.id==this.props.item.id){
      return Object.assign({},item,{showDetails:true})
    }
    return item
  });
  this.props.chngList(updatedList);

}

    render(){
      if(this.props.users.length>0){
      const selectedUser=this.props.users.filter(user=>user.id==this.props.item.userId)[0]
        return(
         <div className="row">
  <div id="admin" className="col s12">
    <div className="card material-table">
      <div className="table-header">

      </div>
      <table id="datatable">
      <thead>
            <TaskDetails showDetails={this.props.item.showDetails} task={this.props.item}/>
         <tr>
    <th>Id</th>
    <th>Title</th> 
    <th>Completed</th>
    <th>Assegnee</th>
  </tr>
  </thead>
  <tbody>
  <tr>
        <td> {this.props.item.id} </td>
        <td> {this.props.item.title} </td>
        <td> {this.props.item.completed? 'Yes ':'No '} </td>
        <td> {selectedUser.name}</td>
         <td><input type="submit" onClick={this.deleteTask} value="Delete Task"  /> </td>
         <td><input type="submit"  value="Show Details" onClick={this.showDetails}/></td>
  </tr>
   </tbody>
      </table>
    </div>
  </div>
</div>
            )
       
    }
    return null
  }

}
const Task=connect(mapStateToProps,mapDispatchToProps)(ConnectedTask)
export default Task
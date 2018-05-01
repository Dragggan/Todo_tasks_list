import React, {Component} from 'react'
import { connect } from "react-redux"; 

import AddTask from '../addTask'
import TaskList from '../../components/TaskList'
import { chngList, chngUsers,chngId } from "../../actions";

const mapDispatchToProps = dispatch => {
 return {
  chngList: list => dispatch(chngList(list)),
  chngId: id => dispatch(chngId(id)),
  chngUsers: list => dispatch(chngUsers(list)),

 };
};

const mapStateToProps = state => {
 return { idCounter: state.idCounter,
  toDoList:state.toDoList,
  users:state.users};
};

class ConnectedHome extends Component{
 constructor(props){
  super(props)
 }

 setToDoList(responseData){
  const toDoList=responseData.filter((item)=>item.userId=='1')
  console.log(toDoList);
  const idLength=toDoList.length;
  console.log(idLength);
  this.props.chngList(toDoList); 
  this.props.chngId(idLength);
 }

 setUsers(responseUsers){
  console.log(responseUsers);
  this.props.chngUsers(responseUsers);
 }

 componentDidMount(){
  if(!this.props.toDoList.length>0){
   const url=new URL('https://jsonplaceholder.typicode.com/todos')
   const request=new Request(url,{
    method:'GET',
    mode:'cors'
   });

   fetch(request).then(response=>
     response.json()).then(responseData=>this.setToDoList(responseData))
     .catch(function(error){console.log(error);})
  }
  if(!this.props.users.length>0){
   const url2=new URL('https://jsonplaceholder.typicode.com/users')
   const request2=new Request(url2,{
    method:'GET',
    mode:'cors'
   });

   fetch(request2).then(response=>
     response.json()).then(responseData=>this.setUsers(responseData))
     .catch(function(error){console.log(error);})
  }
 }

 render(){
  return (
    <div>
     <AddTask/>
     <TaskList/>
    </div>
  )
 }
}

const Home=connect(mapStateToProps,mapDispatchToProps)(ConnectedHome) //ovde moramo da
export default Home
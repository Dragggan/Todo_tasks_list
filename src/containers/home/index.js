import React, {Component} from 'react'
import { connect } from "react-redux";

import AddTask from '../addTask'
import TaskList from '../../components/TaskList'
import { chngList } from "../../actions";

const mapDispatchToProps = dispatch => {
  return {
    chngList: list => dispatch(chngList(list))
  };
};





class ConnectedHome extends Component{
    constructor(props){
        super(props)
    }

    setData(responseData){
   
    const toDoList=responseData.filter((item)=>item.userId=='1')
    console.log(toDoList);
    this.props.chngList(toDoList);
    }

componentDidMount(){
        const url=new URL('https://jsonplaceholder.typicode.com/todos')
        const request=new Request(url,{
        method:'GET',
        mode:'cors'
    });

    fetch(request).then(response=>
      response.json()).then(responseData=>this.setData(responseData))
      .catch(function(error){console.log(error);})
                
}

    render(){
        return ( 
            <div>
                <TaskList/>
                <AddTask/>
            </div>
            )
    }
}


const Home=connect(null,mapDispatchToProps)(ConnectedHome)
export default Home
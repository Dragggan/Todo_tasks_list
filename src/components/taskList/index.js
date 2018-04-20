//ova komponenta je takva da joj treba nesto iz store, ali ona ne menja store. Zato je dovoljno da se ona poveze samo sa mapStateToProps

import React, {Component} from 'react'
import { connect } from "react-redux"; //moramo da uvezemo ovo connect da bismo se spojili sa store-om

import Task from '../task'
import TaskDetails from '../taskDetails'
import './style.css';
//ovom funkcijom mi ustvari uzimamo sta nam treba iz globalnom store-a i to postaje deo props-a komponente
//toDoList levo od : sada postaje deo propsa komponente kao da nam ga je neka druga komponenta prosledila,a u stvari smo ga sami uyeli iy globalnog store-a
const mapStateToProps = state => {
  return { toDoList: state.toDoList };
};

class ConnectedTaskList extends Component{
    render(){

        if(!this.props.toDoList){
            return <div>Waiting for results</div>// ovo radimo da nam ne pukne aplikacija ako nema nista u store-u
        }
        return (
             <div>
            <h1 id="todolist"> To do List:</h1>
            <div>
            {this.props.toDoList.map((item)=><Task item={item} key={item.id}/>)}
            </div>
            </div>
            )
    }
}

const TaskList=connect(mapStateToProps)(ConnectedTaskList) //ovde moramo da povezemo nasu komponentu sa funkcijom mapStateToProps da bi komponenta bila povezana sa globalnim store-om
export default TaskList
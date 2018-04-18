//Home komponenta se nalazi u folderu containers jer ce ona renderovati sve sto se nalazi na home ruti ("/")
//ova komponenta je takva da menja store, ali njoj ne treba nista iz store-a. Zato je dovoljno da se ona poveze samo sa mapStateToProps
//napomena: Neke komponente i menjaju store i uzimaju podatke iz store-a. Takve komponente moraju da se povezu i sa mapStateToProps i sa mapDispatchToProps

import React, {Component} from 'react'
import { connect } from "react-redux"; //moramo da uvezemo ovo connect da bismo se spojili sa store-om

import AddTask from '../addTask'
import TaskList from '../../components/TaskList'
import { chngList, chngUsers } from "../../actions"; //ova komponenta poziva Api, prima podatke, to znaci da menja state, zato moramo da uvezemo i akciju koja nam treba da bismo promenili state


//ova funkcija (koja je ugradjena, nismo joj mi dali ime) 
//sluzi da bismo neki podatak iz nase komponente poslali u akciju
//ovo moramo da uradimo da bi nasa komponenta uopste mogla da menja globalni state
//kada ovo uradimo ovo chngList levo od dve tacke postaje deo propsa nase komponente i mozemo da ga pozovemo bilo kad
const mapDispatchToProps = dispatch => {
  return {
    chngList: list => dispatch(chngList(list)),
    chngUsers: list => dispatch(chngUsers(list))
  };
};

class ConnectedHome extends Component{
    constructor(props){
        super(props)
    }

    setToDoList(responseData){
    const toDoList=responseData.filter((item)=>item.userId=='1')//ovaj API vraca jako veliki json za todo listu, zato smo ovde filtrirali da vrati todo listu samo za jednog usera (na ovome cemo jos raditi)
    console.log(toDoList);
    this.props.chngList(toDoList); //ovde u sustini pozivamo akciju i prosledjujemo joj dobijene podatke iz Apija
    }

    setUsers(responseUsers){
    console.log(responseUsers);
    this.props.chngUsers(responseUsers); 
    }

componentDidMount(){
        const url=new URL('https://jsonplaceholder.typicode.com/todos')
        const request=new Request(url,{
        method:'GET',
        mode:'cors'
    });

    fetch(request).then(response=>
      response.json()).then(responseData=>this.setToDoList(responseData))
      .catch(function(error){console.log(error);})

      const url2=new URL('https://jsonplaceholder.typicode.com/users')
        const request2=new Request(url2,{
        method:'GET',
        mode:'cors'
    });

    fetch(request2).then(response=>
      response.json()).then(responseData=>this.setUsers(responseData))
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


const Home=connect(null,mapDispatchToProps)(ConnectedHome) //ovde moramo da povezemo nasu komponentu sa funkcijom madDispatchToProps da bi komponenta bila povezana sa globalnim store-om
export default Home
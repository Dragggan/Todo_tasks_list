import React, { Component } from 'react';
import Logout from '../logOut';

import './style.css';

class Header extends Component{

    render(){
        return(
          <div>
            <Logout/>
            <header> <h1 className="headerHeadline">To do app</h1> </header>
            </div>
        );
    }
}

export default Header
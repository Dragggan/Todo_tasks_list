import React, { Component } from 'react';
import Logout from '../logOut';

import './style.css';

class Header extends Component{

    render(){
        return(
          <div>
            <Logout/>
            <header> <div className="headerHeadline">TO DO APP</div> </header>
            </div>
        );
    }
}

export default Header
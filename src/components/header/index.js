import React, { Component } from 'react';
import Logout from '../logOut'

import './style.css';

class Header extends Component{

    render(){
        return( <div>
            <Logout/>
            <header> This is Header </header>
            </div>);
    }
}

export default Header
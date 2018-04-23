import React from 'react-dom';
import './style.css';
 import {Route, Redirect} from "react-router-dom";

const LogOut = () => {
        return (
            <div>
             <input type= "button"
               value="kliikkk"
               className="bordered"
               onClick={console.log("logedOut")} />
            </div>
        );
};
export default LogOut;
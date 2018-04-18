import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from "./app";
import store from './store' //moramo da ubezemo stori koji kupi statate iz reducera

ReactDOM.render(

    <Provider store={store}> 
    <App/>
    </Provider>
    , document.getElementById('root'))

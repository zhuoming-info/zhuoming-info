import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import ScreenSize from "./util/ScreenSize"
import axios from 'axios';

localStorage.setItem("deviceSize", ScreenSize(document.documentElement.clientWidth));

axios.get('/api/user/currentuser')
    .then(function (res) {
        if (res.data.currentUser) {
            localStorage.setItem("userId", res.data.currentUser.id);
        }else{
            localStorage.removeItem("userId");
        }
    })
    .catch(function (error) {
        console.log(error);
    });

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

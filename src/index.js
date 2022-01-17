import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/Basics.scss";
import axios from 'axios';

//This is the paga connecting the components to the HTML document/dom

//This is the different urls to fetch depending if I run it local or on heroku. 
//const BASE_URL = `http://localhost:3001/`;
const BASE_URL = `https://mysessionlogapi.herokuapp.com/`;

//This is for where I have used axios. 
axios.defaults.baseURL=BASE_URL;

ReactDOM.render(

    <App />
,
  document.getElementById('root')
);



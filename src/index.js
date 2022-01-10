import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/Basics.scss";
import axios from 'axios';

//This is the paga connecting the components to the HTML document/dom

const BASE_URL = System.getenv("IS_RUNNING_ON_HEROKU") === "TRUE"? `https://mysessionlogapi.herokuapp.com`: `http://localhost:3001`;

//TODO dont use axios
axios.defaults.baseURL=BASE_URL;


ReactDOM.render(

    <App />
,
  document.getElementById('root')
);



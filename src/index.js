import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/Basics.scss";
import axios from 'axios';

//This is the paga connecting the components to the HTML document/dom

const BASE_URL = `http://localhost:3001/`;
//const BASE_URL = `https://mysessionlogapi.herokuapp.com/`;

//TODO dont use axios
axios.defaults.baseURL=BASE_URL;

//dsasa
ReactDOM.render(

    <App />
,
  document.getElementById('root')
);



import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/Basics.scss";
import axios from 'axios';

//This is the paga connecting the components to the HTML document/dom


axios.defaults.baseURL='http://localhost:3001';


ReactDOM.render(

    <App />
,
  document.getElementById('root')
);



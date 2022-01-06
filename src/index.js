import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/index.scss";
import axios from 'axios';

axios.defaults.baseURL='http://localhost:3001/api';


ReactDOM.render(

    <App />
,
  document.getElementById('root')
);



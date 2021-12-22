import React from 'react';
import '../../App';
import Axios from 'axios';
import { useState } from 'react';

function History() {
  //Functon to get data from routes
  const [data, setData] = useState([])
  Axios.get('http://localhost:3001/routes/')
    .then(res => {
      console.log(res.data)
      setData(res.data)
    }).catch(err => {
      console.log(err)
    })

    //Making an array that contains all data that has been fetched. 
  const arr = data.map((data, index) => {
    return (
      <ul>
        <li>{data.name}</li>
      </ul>
    )
  })

  return (
    <div className="App">
      {arr}
    </div>
  );
}


export default History




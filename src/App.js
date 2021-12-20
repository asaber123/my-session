import axios from 'axios';
import { useState } from 'react';
import Header from './components/header';


function App() {
  // //Functon to get data from routes
  // const [data, setData] = useState([])
  // axios.get('http://localhost:3001/routes/')
  //   .then(res => {
  //     console.log(res.data)
  //     setData(res.data)
  //   }).catch(err => {
  //     console.log(err)
  //   })

  //   //Making an array that contains all data that has been fetched. 
  // const arr = data.map((data, index) => {
  //   return (
  //     <ul>
  //       <li>{data.name}</li>
  //     </ul>
  //   )
  // })

  return (
    <>
      <Header />
    </>
  );
}

export default App;

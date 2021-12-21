import axios from 'axios';
import { useState } from 'react';
import Header from './components/Header';
import Home from './components/pages/Home';
import PageOne from './components/pages/PageOne';
import PageTwo from './components/pages/PageTwo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



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
    <Router>
      <div className="App">
        <Header />
        <Home />
        <PageOne />
        <PageTwo />
      </div>
    </Router>
  );
}

export default App;

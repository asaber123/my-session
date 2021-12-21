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
        {/* Header shall always be viewed */}
        <Header />
        {/* I only want to se he different pages when I'm in different urls. Therefore I create a path. 
        I use switch to be able to go a page withoout also oncluding home page. Exact is used to only go to home page if noting else than / in the url is added */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pageone" component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

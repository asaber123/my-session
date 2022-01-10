import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import History from './components/pages/History';
import Analytics from './components/pages/Analytics';
import StartPage from './components/pages/Start';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegisterPage from './components/pages/RegisterPage';



//This is the file where all the "pages" are set and their paths to be reached. 
//I use Swich to be able to swich the pages dependning on the paths. 
//To noit be able to go to pages without be logged in, I check if the session has a toker. 
//If a toker i set, then the user is logged in and are able to go into the different pages. 
//If not, the user will be re-directed to login or register page. 

function App() {
  if (localStorage.getItem('token')) {
    return (
      <Router>
        <div className="App">
          {/* Header shall always be viewed when user is logged in */}
          <Header />
          {/* I only want to se he different pages when I'm in different urls. Therefore I create a path. 
          I use switch to be able to go a page withoout also oncluding home page. Exact is used to only go to home page if noting else than / in the url is added */}
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/history" component={History} />
            <Route path="/analytics" component={Analytics} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/" component={StartPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
  else {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/register" component={RegisterPage} />
            <Route path="/" component={StartPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}


export default App;


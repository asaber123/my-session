
import Header from './components/Header';
import Home from './components/pages/Home';
import History from './components/pages/History';
import Analytics from './components/pages/Analytics';
import MyPage from './components/pages/MyPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {

  return (
    <Router>
      <div className="App">
        {/* Header shall always be viewed */}
        <Header />
        {/* I only want to se he different pages when I'm in different urls. Therefore I create a path. 
        I use switch to be able to go a page withoout also oncluding home page. Exact is used to only go to home page if noting else than / in the url is added */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/history" component={History} />
          <Route path="/analytics" component={Analytics} />
          <Route path="/mypage" component={MyPage} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;

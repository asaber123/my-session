
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import History from './components/pages/History';
import Analytics from './components/pages/Analytics';
import MyPage from './components/pages/MyPage';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Submitbutton from './components/Submitbutton';
import UserStore from './components/pages/userstore/UserStore';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {observer} from 'mobx-react';
import { observable } from 'mobx';

class App extends React.Component{

  async componentDidMount(){
    try{
      let res = await fetch('/isLoggedIn', {
        method: 'post', 
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      let result = await res.json();
      //Sending back a propertie of boolian if it is sucess, so if the user is logged in. 
      if (result && result.success){
        UserStore.loading = false;
        UserStore.isLoggedn = true;
        UserStore.username= result.username;

      }
      //If user is not logged in. 
      else{
        UserStore.loading = false;
        UserStore.isLoggedn = false;


      }
    }
    //If an error is returned from the API this is going to be called anyway. 
    catch(error){
      UserStore.loading = false;
      UserStore.isLoggedn = false;

    }
  }


  //Logout function
  async logOut(){
    try{
      let res = await fetch('/logout', {
        method: 'post', 
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      let result = await res.json();
      //Sending back a propertie of boolian if it is sucess, so if the user logs out. Then username is set to an empty string and is logged in is not anymore. 
      if (result && result.success){
        UserStore.isLoggedn = false;
        UserStore.username = '';

      }
    }
    //If an error is returned, I can debug through console.log
    catch(error){
      console.log(error)

    }
  }

  render(){
    if(UserStore.loading){
      return(
        <div className="app">
        loading..
        </div>
      );
    }
    else{
      if (UserStore.isLoggedIn){
        return(
          <div className="app">
          Welcome 
          <Submitbutton
          text={'Log out'}
          disabled ={false}
          onClick={() =>this.Logout()}/>
          </div>

        );
      }
      
        return(
          <div className="app">
          <Login/>
          <Submitbutton
          text={'Log out'}
          disabled ={false}
          onClick={() =>this.Logout()}/>
          </div>
        )
      
    }
    // return(
    //   <Router>
    //   <div className="App">
    //     {/* Header shall always be viewed */}
    //     <Header />
    //     {/* I only want to se he different pages when I'm in different urls. Therefore I create a path. 
    //     I use switch to be able to go a page withoout also oncluding home page. Exact is used to only go to home page if noting else than / in the url is added */}
    //     <Switch>
    //       <Route path="/" exact component={Home} />
    //       <Route path="/history" component={History} />
    //       <Route path="/analytics" component={Analytics} />
    //       <Route path="/mypage" component={MyPage} />
    //       <Route path="/login" component={Login} />
    //       <Route path="/register" component={Register} />
    //     </Switch>
    //     <Footer />
    //   </div>
    // </Router>
    // )
  }
}
//Observer makes the component listen 
export default observer(App);

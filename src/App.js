import React, { Component } from 'react';
import axios from 'axios';
import Login from './Components/Login';
import logo from './communityBank.svg'
import {Route} from 'react-router-dom';
import Profile from './Components/Profile';
import { connect } from "react-redux";
import {login,logout} from './ducks/reducer';

import './App.css';

class App extends Component {

componentDidMount(){
  axios.get('/api/profile').then(response =>{
    // this.setState({user:response.data.user});
    if(response.data.user){
      this.props.login(response.data.user);
    }
  });
}


login() {
  const redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`);
  window.location = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/login?client=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}`
}


  render() {
    return (
      <div className="app">
    
        <Route path="/profile" component ={Profile}/>
        <Route exact path ="/" render= {() =>(
          <div>
                <img src={logo} className ="logo"/>
      <Login login={this.login}/> 
      </div>
        )}/>
  
      </div>
    );
  }
}

const mapDispatchToProps = {
    login:login,
    logout:logout
};



export default connect(null, mapDispatchToProps)( App );

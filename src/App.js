import React, { Component } from 'react';
import logo from './communityBank.svg';
import './App.css';
import axios from 'axios';
import Login from './Components/Login';
import Profile from './Components/Profile';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, logout } from './ducks/reducer';

class App extends Component {
  componentDidMount() {
    axios.get('/api/profile').then(response => {
      if (response.data.user) {
        this.props.login(response.data.user);
      }
    });
  }

  login() {
    const callbackUri = encodeURIComponent(window.location.origin + '/auth/callback');
    window.location = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/login?client=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${callbackUri}`;
  }

  render() {
    return (
      <div className="app">
        <Route path="/profile" component={Profile} />
        <Route path="/" exact render={() => (
          <div>
            <img src={logo} className="logo" alt="logo" />
            <Login login={this.login} />
          </div>
        )} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  login,
  logout,
};

export default connect(null, mapDispatchToProps)(App);
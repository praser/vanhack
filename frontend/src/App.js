import './assets/css/App.css';
import 'materialize-css/dist/css/materialize.css';

import 'jquery';
import 'materialize-css/dist/js/materialize.js';

import vanhackLogo from './assets/images/logo.svg';

import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Header from './components/Header';
import Logo from './components/Logo';

import Signup from './Signup';
import Login from './Login';
import Logout from './Logout';
import Dashboard from './Dashboard';

function userHasToken(nextState, replace) {
  console.log('executei')
  if(localStorage.getItem('apiKey') === null) {
    replace('/login');
  }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header>
            <Logo src={vanhackLogo} width='100' height='58' alt='Logo' />
          </Header>

          <div className='content'>
            <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
              className="route-wrapper"
            >
              <Route path="/signup" component={Signup}/>
              <Route path="/login" component={Login}/>
              <Route path='/logout' component={Logout} onEnter={userHasToken}/>
              <Route path="/dashboard" component={Dashboard}/>
            </AnimatedSwitch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
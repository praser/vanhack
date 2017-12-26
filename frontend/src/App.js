//CSS
import './assets/css/App.css';
import 'materialize-css/dist/css/materialize.css';
//JS
import 'jquery';
import 'materialize-css/dist/js/materialize.js';
//IMAGES
import vanhackLogo from './assets/images/logo.svg';

//COMPONENTS
import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import {connect} from 'react-redux';
import Header from './components/Header';
import Logo from './components/Logo';
import Toast from './components/Toast';
import Signup from './views/Signup';
import Login from './views/Login';
import Logout from './views/Logout';
import Dashboard from './views/Dashboard';

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
              atLeave={{ opacity: 1 }}
              atActive={{ opacity: 1 }}
              className="route-wrapper"
            >
              <Route path="/signup" component={Signup}/>
              <Route path="/login" component={Login}/>
              <Route path='/logout' component={Logout}/>
              <Route path="/dashboard" component={Dashboard}/>
            </AnimatedSwitch>
          </div>

          <Toast />
          
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.addMessage
  }
}

export default connect(mapStateToProps)(App);
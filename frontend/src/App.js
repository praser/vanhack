import './assets/css/App.css';
import 'materialize-css/dist/css/materialize.css';
import 'jquery';
import 'materialize-css/dist/js/materialize.js';
import vanhackLogo from './assets/images/logo.svg';

import React, { Component } from 'react';

import { HashRouter, Route } from 'react-router-dom';
import { Row } from 'react-materialize';
import Header from './components/Header';
import Logo from './components/Logo';
import Signup from './Signup';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Header>
            <Logo src={vanhackLogo} width='100' height='58' alt='Logo' />
          </Header>

          <Row className='container'>
            <Route path="/signup" component={Signup}/>
          </Row>
        </div>
      </HashRouter>
    );
  }
}

export default App
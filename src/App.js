import 'materialize-css/dist/css/materialize.css';
import 'jquery';
import './App.css';

import React, { Component } from 'react';
import { Row } from 'react-materialize';

import SignupForm from './components/SignupForm';
import Header from './components/Header';
import Logo from './components/Logo';

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <Logo
            src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
            width='100'
            height='58'
            alt='Logo'
          />
        </Header>

        <Row className='container'>
          <SignupForm />
        </Row>
      </div>
    );
  }
}

export default App
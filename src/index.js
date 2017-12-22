import 'materialize-css/dist/css/materialize.css';
import './assets/css/index.css';

import logo from './assets/images/logo.svg';

import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery';
import { Row } from 'react-materialize';
import Header from './components/Header';
import Logo from './components/Logo';

ReactDOM.render(
  <div>
    <Header>
      <Logo src={logo} width='100' height='58' alt='Logo' />
    </Header>

    <Row className='container'>
    </Row>
  </div>, 
  document.getElementById('root')
);

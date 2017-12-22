import './assets/css/App.css';

import React, { Component } from 'react';

import SignupForm from './components/SignupForm';

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <Logo
            src={logo}
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
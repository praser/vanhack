import Materialize from 'materialize-css/dist/js/materialize.js';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
  componentDidMount() {
    localStorage.clear();
    Materialize.toast('Your session has been finished. Hope see you soon.', 4000);
  }

  render() {
    return <Redirect to='/' />
  }
}

export default Logout
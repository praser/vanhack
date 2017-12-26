import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { addMessage, logout } from '../actions/index';
import { connect } from 'react-redux';

class Logout extends Component {
  componentDidMount(){
    this.props.logout();
    this.props.addMessage('Your session has been finished. Hope see you soon.');
  }

  render() {
    return <Redirect to='/' />
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.addMessage,
    user: state.login
  }
}

const mapDispacherToProps = (dispatcher) => {
  return {
    addMessage: (message) => dispatcher(addMessage(message)),
    logout: () => dispatcher(logout())
  }
}

export default connect(mapStateToProps, mapDispacherToProps)(Logout);
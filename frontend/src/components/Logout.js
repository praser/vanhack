import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addMessage, logout } from '../actions/index';

class Logout extends Component {
  componentDidMount() {
    this.props.logout();
    this.props.addMessage('Your session has been finished. Hope see you soon.');
  }

  render() {
    return <Redirect to="/" />;
  }
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
  addMessage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  message: state.addMessage,
  user: state.login,
});

const mapDispacherToProps = dispatcher => ({
  addMessage: message => dispatcher(addMessage(message)),
  logout: () => dispatcher(logout()),
});

export default connect(mapStateToProps, mapDispacherToProps)(Logout);

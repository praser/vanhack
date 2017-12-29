import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from '../actions/user';
import { addUIMessage } from '../actions/ui_message';

class Logout extends Component {
  componentDidMount() {
    this.props.logoutUser();
    this.props.addUIMessage('Your session has been finished. Hope see you soon.');
  }

  render() {
    return <Redirect to="/" />;
  }
}

Logout.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  addUIMessage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  message: state.addUIMessage,
  user: state.user,
});

const mapDispacherToProps = dispatcher => ({
  addUIMessage: message => dispatcher(addUIMessage(message)),
  logoutUser: () => dispatcher(logoutUser()),
});

export default connect(mapStateToProps, mapDispacherToProps)(Logout);

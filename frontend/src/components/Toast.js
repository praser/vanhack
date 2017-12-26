import React, { Component } from 'react';
import Materialize from 'materialize-css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addMessage } from '../actions/index';

class Toast extends Component {
  componentDidUpdate() {
    Materialize.toast(this.props.message, 4000);
    this.props.addMessage(null);
  }

  render() {
    return <span />;
  }
}

Toast.propTypes = {
  message: PropTypes.string,
  addMessage: PropTypes.func.isRequired,
};

Toast.defaultProps = {
  message: PropTypes.instanceOf(null),
};

const mapStateToProps = state => ({
  message: state.addMessage,
});

const mapDispatchToProps = dispatch => ({
  addMessage: message => dispatch(addMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Toast);

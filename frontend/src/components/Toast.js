import React, { Component } from 'react';
import Materialize from 'materialize-css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addUIMessage } from '../actions/ui_message';
import '../assets/css/Toast.css';

class Toast extends Component {
  componentDidUpdate() {
    Materialize.toast(this.props.uiMessage, 4000);
    this.props.addUIMessage(null);
  }

  render() {
    return <span />;
  }
}

Toast.propTypes = {
  uiMessage: PropTypes.string,
  addUIMessage: PropTypes.func.isRequired,
};

Toast.defaultProps = {
  uiMessage: PropTypes.instanceOf(null),
};

const mapStateToProps = state => ({
  uiMessage: state.uiMessage,
});

const mapDispatchToProps = dispatch => ({
  addUIMessage: uiMessage => dispatch(addUIMessage(uiMessage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Toast);

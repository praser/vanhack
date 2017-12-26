import React, {Component} from 'react';
import Materialize from 'materialize-css/dist/js/materialize.js';
import {addMessage} from '../actions/index';
import {connect} from 'react-redux';

class Toast extends Component{
  componentDidUpdate() {
    Materialize.toast(this.props.message, 4000);
    this.props.addMessage(null);
  }

  render() {
    return <span/>
  }
};

const mapStateToProps = (state) => {
  return {
    message: state.addMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (message) => dispatch(addMessage(message))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toast)
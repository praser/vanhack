import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import {loginRequest} from '../actions/index';

import Input from '../components/Input';
import If from '../components/If';
import Loading from '../components/Loading';
import Container from '../components/Container';
import Form from '../models/Form';

class LoginForm extends Component {
  _validate() {
    const form = new Form(
      document.querySelector('form button'), [this.email, this.password]);
    return(form.handleButton());
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.loginRequest(this.email.value, this.password.value)
  }

  render() {
    const size = 's12';
    return (
      <Container grid='s10 m8 l6 offset-s1 offset-m2 offset-l3' title='Login'>
        <form onSubmit={this._handleSubmit.bind(this)}>
          <div className='row'>
            <Input label='E-mail' name='email' size={size} msgError='The value you gave does not seems a valid e-mail address'>
              <input name='name' type='email' className='validate' required
                onChange={this._validate.bind(this)}
                ref={(input) => this.email = input}
              />
            </Input>
            
            <Input label='Password' name='password' size={size} msgError='Password is a required field'>
              <input name='name' type='password' className='validate' required
                onChange={this._validate.bind(this)}
                ref={(input) => this.password = input}
              />
            </Input>
          </div>
          <center className="row">
            <button className="btn waves-effect waves-light center" type="submit" name="action" disabled>
              Login
              <i className="material-icons right">send</i>
            </button>
          </center>
        </form>
        <If test={this.props.isLoading}>
          <Loading />
        </If>
        <If test={Object.keys(this.props.user).length > 0}>
          <Redirect to='/dashboard' />
        </If>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.login,
    isLoading: state.loginIsLoading
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (email, password) => dispatch(loginRequest(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
import React, { Component } from 'react';
import Input from '../components/Input';
import If from '../components/If';
import Loading from '../components/Loading';
import { Redirect } from 'react-router-dom';
import Container from '../components/Container';
import Form from '../models/Form';
import {signupRequest} from '../actions/index';
import {connect} from 'react-redux';

class SignupForm extends Component {
  _validate() {
    const form = new Form(
      document.querySelector('form button'),
      [this.name, this.email, this.password, this.agreement]
    );
    return(form.handleButton());
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.signupRequest(
      this.name.value,
      this.email.value,
      this.password.value,
      this.agreement.value
    )
  }

  render() {
    const size = 's12';
    return (
      <Container grid='s10 m8 l6 offset-s1 offset-m2 offset-l3' title="Create account">
        <form onSubmit={this._handleSubmit.bind(this)}>
          <div className='row'>
            <Input label='Full name' name='name' size={size} msgError='Full name is a required field'>
              <input name='name' type='text' className='validate' required
                onChange={this._validate.bind(this)}
                ref={(input) => this.name = input}
              />
            </Input>
            
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
            
            <div className='col s12'>
              <input  type='checkbox' name='agreement' id='agreement' className='validate' required
                      onChange={this._validate.bind(this)}
                      ref={(input) => this.agreement = input} />
              <label htmlFor='agreement' data-error='opss'>I agree with terms of use.</label>
            </div>
          </div>
          <center className="row">
            <button className="btn waves-effect waves-light center" type="submit" name="action" disabled>
              Submit
              <i className="material-icons right">send</i>
            </button>
          </center>
        </form>
        <If test={this.props.isLoading}>
          <Loading />
        </If>
        <If test={Object.keys(this.props.user).length !== 0}>
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
    signupRequest: (name, email, password, agreement) => dispatch(signupRequest(name, email, password, agreement))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
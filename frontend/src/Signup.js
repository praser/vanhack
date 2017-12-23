import 'hammerjs'
import Materialize from 'materialize-css/dist/js/materialize.js';

import React, { Component } from 'react';
import Input from './components/Input';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      agreement: false
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    switch(event.target.type){
      case 'checkbox':
        this.handleState(event.target.name, event.target.checked);
        break;
      default:
        this.handleState(event.target.name, event.target.value);
    }
    this.handleButton(event.target);
  }

  handleState(key, value) {
    const state = {};
    state[key] = value;
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();
    return this.validateForm(event.target) ? this.postData() : false;
  }

  handleButton(target) {
    const btn = document.querySelector('form button');
    this.validateForm(target) ? btn.disabled = false : btn.disabled = true;
  }

  validateForm(target) {
    const fields = [].slice.call(document.getElementsByTagName('input'));
    return fields.map((field) => field.checkValidity()).every((el) => el);
  }

  postData() {
    const url = 'http://localhost:3030/users';
    const headers = new Headers();
    let status = 0
    headers.append('Content-Type', 'application/json');
    fetch(url, {
      method: 'post',
      body: JSON.stringify(this.state),
      headers: headers
    })
    .then(response => {
      status = response.status;
      return response.json()
    })
    .then(json => {
      console.log(json);
      if(status >= 400) {
        throw new Error('Bad request or server error');
      }
    })
    .catch(() => Materialize.toast("Something went wrong. We hope it works when you try again.", 4000))
  }

  render() {
    const size = 's12';
    return (
      <div className='row'>
        <form className='col z-depth-5 s10 m8 l6 offset-s1 offset-m2 offset-l3' onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col s12">
              <h5 className="center">Create account</h5>
              <Input label='Full name' name='name' type='text' size={size} onChange={this.handleInputChange} required={true} msgError='Full name is a required field'/>
              <Input label='E-mail' name='email' type='email' size={size} onChange={this.handleInputChange} required={true} msgError='The value you gave does not seems a valid e-mail address'/>
              <Input label='Password' name='password' type='password' size={size} onChange={this.handleInputChange} required={true} msgError='Password is a required field' />
              <div className='col'>
                <input type='checkbox' name='agreement' id='agreement' onChange={this.handleInputChange} className='validate' required/>
                <label htmlFor='agreement' data-error='opss'>I agree with terms of use.</label>
              </div>
            </div>
          </div>
          <center className="row">
            <button className="btn waves-effect waves-light center" type="submit" name="action" disabled>Submit
              <i className="material-icons right">send</i>
            </button>
          </center>
        </form>
      </div>
    )
  }
}

export default SignupForm
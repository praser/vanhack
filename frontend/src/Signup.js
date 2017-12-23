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
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
    this.handleButton(event.target);
  }

  handleCheckboxChange(event) {
    const state = {};
    state[event.target.name] = event.target.checked;
    this.setState(state);
    this.handleButton(event.target);
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
    console.log(fields.map((field) => field.checkValidity()).every((el) => el));
    return fields.map((field) => field.checkValidity()).every((el) => el);
  }

  postData() {
    const url = 'http://localhost:3030/users';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    fetch(url, {
      method: 'post',
      body: JSON.stringify(this.state),
      headers: headers
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      Materialize.toast("Your account has been created. We're so proud about you!", 4000)
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
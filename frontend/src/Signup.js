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

    this.handleInput = this.handleInput.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    const state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleCheckbox(event) {
    const state = {};
    state[event.target.name] = event.target.checked;
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.postData();
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
      Materialize.toast("Account successfully create", 4000)
    })
    .catch(() => Materialize.toast("Something went wrong. We're so sorry...", 4000))
  }

  render() {
    const size = 's12';
    return (
      <div className='row'>
        <form className='col z-depth-5 s10 m8 l6 offset-s1 offset-m2 offset-l3'
              onSubmit={this.handleSubmit}
        >
          <div className="row">
            <div className="col s12">
              <h5 className="center">Create account</h5>
              <Input label='Full name' name='name' type='text' size={size}/>
              <Input label='E-mail' name='email' type='email' size={size} />
              <Input label='Password' name='password' type='password' size={size} />
              <div className='col'>
                <input type='checkbox' name='agreement' id='agreement' />
                <label htmlFor='agreement'>I agree with terms of use.</label>
              </div>
            </div>
          </div>
          <center className="row">
            <button className="btn waves-effect waves-light center" type="submit" name="action">Submit
              <i className="material-icons right">send</i>
            </button>
          </center>
        </form>
      </div>
    )
  }
}

export default SignupForm
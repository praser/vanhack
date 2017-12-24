import 'hammerjs'
import Materialize from 'materialize-css/dist/js/materialize.js';

import React, { Component } from 'react';
import Input from './components/Input';
import If from './components/If';
import Loading from './components/Loading';

class SignupForm extends Component {
  constructor(props){
    super();
    this.state = { loading: false };
  }
  _handleSubmit(event) {
    event.preventDefault();
    return this._validateForm(event.target) ? this._postForm() : false;
  }

  _handleButton(target) {
    const btn = document.querySelector('form button');
    this._validateForm() ? btn.disabled = false : btn.disabled = true;
  }

  _validateForm() {
    const fields = [this.name, this.email, this.password, this.agreement];
    return fields.map((field) => field.checkValidity()).every((el) => el);
  }

  _postForm() {
    this.setState({loading: true})
    const url = 'http://localhost:3030/users';
    const requestInfo = {
      method: 'POST',
      body: JSON.stringify({
        name: this.name.value,
        email: this.email.value,
        password: this.password.value,
        agreement: this.agreement.value
      }),
      headers: new Headers({'Content-Type': 'application/json'})
    }

    fetch(url, requestInfo)
    .then(response => {
      if(response.ok) {
        Materialize.toast('Congratulatios! Your account has been created.', 4000);
      } else {
        Materialize.toast('Ops, look like you dont fill the form very well. Please double check it and try again.', 4000);
      }
      setTimeout(() => this.setState({loading: false}), 1000);
    })
    .catch(() => {
      Materialize.toast("Something went wrong. We hope it works when you try again.", 4000);
      setTimeout(() => this.setState({loading: false}), 1000);
    });
  }

  render() {
    const size = 's12';
    return (
      <div className='row'>
        <form className='col z-depth-5 s10 m8 l6 offset-s1 offset-m2 offset-l3' onSubmit={this._handleSubmit.bind(this)}>
          <div className="row">
            <div className="col s12">
              <h5 className="center">Create account</h5>
              <Input label='Full name' name='name' size={size} msgError='Full name is a required field'>
                <input name='name' type='text' className='validate' required
                  onChange={this._handleButton.bind(this)}
                  ref={(input) => this.name = input}
                />
              </Input>
              
              <Input label='E-mail' name='email' size={size} msgError='The value you gave does not seems a valid e-mail address'>
                <input name='name' type='email' className='validate' required
                  onChange={this._handleButton.bind(this)}
                  ref={(input) => this.email = input}
                />
              </Input>
              
              <Input label='Password' name='password' size={size} msgError='Password is a required field'>
              <input name='name' type='password' className='validate' required
                  onChange={this._handleButton.bind(this)}
                  ref={(input) => this.password = input}
                />
              </Input>
              
              <div className='col'>
                <input  type='checkbox' name='agreement' id='agreement' className='validate' required
                        onChange={this._handleButton.bind(this)}
                        ref={(input) => this.agreement = input} />
                <label htmlFor='agreement' data-error='opss'>I agree with terms of use.</label>
              </div>
            </div>
          </div>
          <center className="row">
            <button className="btn waves-effect waves-light center" type="submit" name="action" disabled>
              Submit
              <i className="material-icons right">send</i>
            </button>
          </center>
        </form>
        <If test={this.state.loading}>
          <Loading />
        </If>
      </div>
    )
  }
}

export default SignupForm
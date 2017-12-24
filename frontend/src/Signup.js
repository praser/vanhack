import Materialize from 'materialize-css/dist/js/materialize.js';

import React, { Component } from 'react';
import Input from './components/Input';
import If from './components/If';
import Loading from './components/Loading';
import User from './models/User';
import { Redirect } from 'react-router-dom';
import Container from './components/Container';
import Form from './models/Form';
import Remote from './models/Remote';

class SignupForm extends Component {
  constructor(props){
    super();
    this.state = {
      loading: false,
      triggerRedirect: false,
    };
  }

  _validate() {
    const form = new Form(
      document.querySelector('form button'),
      [this.name, this.email, this.password, this.agreement]
    );
    return(form.handleButton());
  }

  _handleSubmit(event) {
    event.preventDefault();
    
    let status = 0;
    const body = JSON.stringify({
      name: this.name.value,
      email: this.email.value,
      password: this.password.value,
      agreement: this.agreement.value
    });

    this.setState({loading: true})

    new Remote('http://localhost:3030/users', {
      body: body,
      method: 'POST'
    }).fetch()
    .then(response => {
      status = response.status;
      if(response.ok) {
        Materialize.toast('Congratulatios! Your account has been created.', 4000);
      } else {
        Materialize.toast('Ops, look like you dont fill the form very well. Please double check it and try again.', 4000);
      }
      setTimeout(() => this.setState({loading: false}), 1000);
      return response.json();
    })
    .then(json => {
      const user = new User(json);
      if (status < 400) {
        user.save();
        this.setState({ triggerRedirect: true })
      } else {
        user.logout();
      }
    })
    .catch(() => {
      Materialize.toast("Something went wrong. We hope it works when you try again.", 4000);
      setTimeout(() => this.setState({loading: false}), 1000);
    });
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
        <If test={this.state.loading}>
          <Loading />
        </If>
        <If test={this.state.triggerRedirect}>
          <Redirect to='/dashboard' />
        </If>
      </Container>
    )
  }
}

export default SignupForm
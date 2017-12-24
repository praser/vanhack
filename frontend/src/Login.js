import Materialize from 'materialize-css/dist/js/materialize.js';

import React, { Component } from 'react';
import Input from './components/Input';
import If from './components/If';
import Loading from './components/Loading';
import { Redirect } from 'react-router-dom';
import Container from './components/Container';
import Form from './models/Form';
import Remote from './models/Remote';
import User from './models/User';

class LoginForm extends Component {
  constructor(props){
    super();
    this.state = {
      loading: false,
      triggerRedirect: false,
    };
  }

  _validate() {
    const form = new Form(
      document.querySelector('form button'), [this.email, this.password]);
    return(form.handleButton());
  }

  _handleSubmit(event) {
    event.preventDefault();
    const body = JSON.stringify({
      email: this.email.value,
      password: this.password.value
    });

    this.setState({loading: true})
    new Remote('http://localhost:3030/authenticate', {
      body: body,
      method: 'POST'
    }).fetch()
    .then(response => response.json())
    .then(json => {
      let message = ''
      const user = new User(json);
      console.log(user);
      if (user.loggedIn()) {
        user.save();
        message = `Wellcome back ${user.name}, we are glad to see you here again.`;
        this.setState({triggerRedirect: true});
       } else {
         message = 'Invalid credentials';
       }
      
      Materialize.toast(message, 4000);
      this.setState({loading: false})
    })
    .catch(erro =>{
      console.log(erro)
      Materialize.toast('Oops! That is embracing but something whent wrong', 4000);
      this.setState({loading: false})
    });
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

export default LoginForm
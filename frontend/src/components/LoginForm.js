import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getUser } from '../actions/user';
import Input from '../components/Input';
import If from '../components/If';
import Container from '../components/Container';
import HTMLFormValidation from '../assets/js/html_form_validation';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  validate() {
    const form = new HTMLFormValidation(document.querySelector('form button'), [this.email, this.password]);
    return (form.handleButton());
  }

  handleSubmit(event) {
    event.preventDefault();
    const credentials = {
      email: this.email.value,
      password: this.password.value,
    };
    this.props.getUser(credentials);
  }

  render() {
    const size = 's12';
    return (
      <Container grid="s10 m8 l6 offset-s1 offset-m2 offset-l3" title="Login">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <Input
              label="E-mail"
              name="email"
              size={size}
              msgError="The value you gave does not seems a valid e-mail address"
            >
              <input
                name="name"
                type="email"
                className="validate"
                required
                onChange={this.validate}
                ref={(input) => {
                  this.email = input;
                  return this.email;
                }}
              />
            </Input>

            <Input
              label="Password"
              name="password"
              size={size}
              msgError="Password is a required field"
            >
              <input
                name="name"
                type="password"
                className="validate"
                required
                onChange={this.validate}
                ref={(input) => {
                  this.password = input;
                  return this.password;
                }}
              />
            </Input>
          </div>
          <center className="row">
            <button
              className="btn waves-effect waves-light center"
              type="submit"
              name="action"
              disabled
            >
              Login
              <i className="material-icons right">send</i>
            </button>
          </center>
        </form>

        <If test={Object.keys(this.props.user).length > 0}>
          <Redirect to="/dashboard" />
        </If>
      </Container>
    );
  }
}

LoginForm.propTypes = {
  getUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  getUser: credentials => dispatch(getUser(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

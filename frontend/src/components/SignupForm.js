import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Input from '../components/Input';
import If from '../components/If';
import Container from '../components/Container';
import HTMLFormValidation from '../assets/js/html_form_validation';
import { createUser } from '../actions/user';
import { clearApiLastResponse } from '../actions/response';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.validate = this.validate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate() {
    const form = new HTMLFormValidation(
      document.querySelector('form button'),
      [this.name, this.email, this.password, this.agreement, this.avatar],
    );
    return (form.handleButton());
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createUser({
      name: this.name.value,
      email: this.email.value,
      password: this.password.value,
      agreement: this.agreement.value,
      avatar: this.avatar.value,
    });
  }

  render() {
    const size = 's12';
    return (
      <Container grid="s10 m8 l6 offset-s1 offset-m2 offset-l3" title="Create account">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <Input
              label="Full name"
              name="name"
              size={size}
              msgError="Full name is a required field"
            >
              <input
                name="name"
                type="text"
                className="validate"
                required
                onChange={this.validate}
                ref={(input) => {
                  this.name = input;
                  return this.name;
                }}
              />
            </Input>

            <Input
              label="Avatar URL"
              name="avatar"
              size={size}
              msgError="Avartar must be a valid url."
            >
              <input
                name="name"
                type="url"
                className="validate"
                onChange={this.validate}
                ref={(input) => {
                  this.avatar = input;
                  return this.avatar;
                }}
              />
            </Input>

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

            <div className="col s12">
              <input
                type="checkbox"
                name="agreement"
                id="agreement"
                className="validate"
                required
                onChange={this.validate}
                ref={(input) => {
                  this.agreement = input;
                  return this.agreement;
                }}
              />
              <label
                htmlFor="agreement"
                data-error="You must agree to signup"
              >
                I agree with terms of use.
              </label>
            </div>
          </div>
          <center className="row">
            <button
              className="btn waves-effect waves-light center"
              type="submit"
              name="action"
              disabled
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </center>
        </form>
        <If test={this.props.apiLastResponse.ok}>
          <Redirect to="/dashboard" />
        </If>
      </Container>
    );
  }
}

SignupForm.propTypes = {
  createUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  apiLastResponse: state.apiLastResponse
});

const mapDispatchToProps = dispatch => ({
  createUser: userData => dispatch(createUser(userData)),
  clearApiLastResponse: () => dispatch(clearApiLastResponse),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);

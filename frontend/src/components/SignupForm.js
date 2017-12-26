import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Input from '../components/Input';
import If from '../components/If';
import Loading from '../components/Loading';
import Container from '../components/Container';
import HTMLFormValidation from '../assets/js/html_form_validation';
import { signupRequest } from '../actions/index';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.validate = this.validate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate() {
    const form = new HTMLFormValidation(
      document.querySelector('form button'),
      [this.name, this.email, this.password, this.agreement],
    );
    return (form.handleButton());
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.signupRequest(
      this.name.value,
      this.email.value,
      this.password.value,
      this.agreement.value,
    );
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
        <If test={this.props.isLoading}>
          <Loading />
        </If>
        <If test={Object.keys(this.props.user).length !== 0}>
          <Redirect to="/dashboard" />
        </If>
      </Container>
    );
  }
}

SignupForm.propTypes = {
  isLoading: PropTypes.bool,
  signupRequest: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

SignupForm.defaultProps = {
  isLoading: undefined,
};

const mapStateToProps = state => ({
  user: state.login,
  isLoading: state.requestIsLoading,
});

const mapDispatchToProps = dispatch => ({
  signupRequest: (name, email, password, agreement) => (
    dispatch(signupRequest(name, email, password, agreement))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);

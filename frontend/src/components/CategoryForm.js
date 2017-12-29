import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import Container from './Container';
import HTMLFormValidation from '../assets/js/html_form_validation';
import { createCategory } from '../actions/category'
import { clearApiLastResponse } from '../actions/response';
import Input from './Input';
import If from './If';
import { CATEGORIES_URI } from '../apiRoutes'

class CategoryForm extends Component {
  constructor(props) {
    super(props);
    this.validate = this.validate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate() {
    const Form = new HTMLFormValidation(
      document.querySelector('form button'),
      [this.name, this.description],
    );
    return (Form.handleButton());
  }

  handleSubmit(event) {
    event.preventDefault();

    const category = {
      name: this.name.value,
      description: this.description.value,
    }

    this.props.createCategory(category, this.props.user.api_key);
  }

  shouldRedirect() {
    return (
      this.props.apiLastResponse.url === CATEGORIES_URI && 
      this.props.apiLastResponse.status === 201
    );
  }

  render() {
    const size = 's12';
    return (
      <Container grid="s10 m8 l6 offset-s1 offset-m2 offset-l3" title="Create new category">
        <span />
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <Input
              label="Name"
              name="name"
              size={size}
              msgError="The new category needs a name"
            >
              <input
                name="name"
                type="text"
                className="validate"
                required
                onChange={this.validate}
                ref={
                  (input) => {
                    this.name = input;
                    return this.name;
                  }
                }
              />
            </Input>

            <div className={`input-field col ${size}`}>
              <textarea
                id="description"
                name="description"
                className="materialize-textarea validate"
                ref={
                  (textarea) => {
                    this.description = textarea;
                    return this.description;
                  }
                }
              />
              <label htmlFor="description">Description</label>
            </div>
          </div>
          <center className="row">
            <button
              className="btn waves-effect waves-light center"
              type="submit"
              name="action"
              disabled
            >
              Create
              <i className="material-icons right">send</i>
            </button>
          </center>
        </form>
        
        <If test={this.shouldRedirect()}>
          <Redirect to='/dashboard' />
        </If>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  apiLastResponse: state.apiLastResponse
})

const mapDispatchToProps = dispatch => ({
  createCategory: (category, apiToken) => dispatch(createCategory(category, apiToken)),
  clearApiLastResponse: () => dispatch(clearApiLastResponse())
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);

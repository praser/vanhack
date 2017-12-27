import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import Container from './Container';
import Input from './Input';
import If from './If';
import Loading from './Loading';
import html_form_validation from '../assets/js/html_form_validation';
import { createCategory } from '../actions/index';

class CategoryForm extends Component {
  constructor(props) {
    super(props);
    this.validate = this.validate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate() {
    const form = new html_form_validation(
      document.querySelector('form button'), 
      [this.name, this.description]
    );
    return (form.handleButton());
  }

  handleSubmit(event) {
    event.preventDefault();
    const options = {
      body: JSON.stringify({
        name: this.name.value,
        description: this.description.value,
      })
    }

    this.props.createCategory('localhost:3000/categories', options);
  }

  render() {
    const size = 's12';
    return (
      <Container grid="s10 m8 l6 offset-s1 offset-m2 offset-l3" title="Create new category">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <Input
              label="Category name"
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
                ref={(input) => {
                  this.name = input;
                  return this.name;
                }}
              />
            </Input>

            <div className={`input-field col ${size}`}>
              <textarea
                id="description"
                className="materialize-textarea validate"
                name="description"
                ref={(textarea) => {
                  this.description = textarea;
                  return this.description;
                }}
              >
              </textarea>
              <label htmlFor="description">Category description</label>
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
        <If test={false}>
          <Loading />
        </If>
        <If test={0 > 0}>
          <Redirect to="/dashboard" />
        </If>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  category: state.newCategory,
  isLoading: state.requestIsLoading,
});

const mapDispatchToProps = dispatch => ({
  createCategory: (name, description) => dispatch(createCategory(name, description)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);
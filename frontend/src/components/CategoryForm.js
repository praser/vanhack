import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from './Container';
import Input from './Input';
import HTMLFormValidation from '../assets/js/html_form_validation';

class CategoryForm extends Component {
  constructor(props) {
    super(props);
    this.validate = this.validate.bind(this);
  }

  validate() {
    const Form = new HTMLFormValidation(
      document.querySelector('form button'),
      [this.props.nameField],
    );
    return (Form.handleButton());
  }

  render() {
    const size = 's12';
    return (
      <Container grid="s10 m8 l6 offset-s1 offset-m2 offset-l3" title={this.props.title}>
        <span />
        <form onSubmit={this.props.onSubmit}>
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
                ref={this.props.nameRef}
              />
            </Input>

            <div className={`input-field col ${size}`}>
              <textarea
                id="description"
                name="description"
                className="materialize-textarea validate"
                ref={this.props.descriptionRef}
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
      </Container>
    );
  }
}

CategoryForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  nameRef: PropTypes.func.isRequired,
  descriptionRef: PropTypes.func.isRequired,
};

export default CategoryForm;

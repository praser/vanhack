import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import CategoryForm from './CategoryForm';
import If from './If';
import { createCategory } from '../actions/category'
import { clearApiLastResponse } from '../actions/response';

class NewCategory extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const category = {
      name: this.name.value,
      description: this.description.value,
    }

    this.props.createCategory(category, this.props.user.api_key);
    console.log(this.props.apiLastResponse);
  }

  componentWillUnmount() {
    this.props.clearApiLastResponse()
  }

  render() {
    return (
      <div>
        <CategoryForm 
          title="Create new category"
          onSubmit={ this.handleSubmit }
          nameField={this.name}
          nameRef={
            (input) => {
              this.name = input;
              return this.name;
            }
          }
          descriptionField={this.descriptionField}
          descriptionRef={
            (textarea) => {
              this.description = textarea;
              return this.description;
            }
          }
        />
        <If test={this.props.apiLastResponse.ok}>
          <Redirect to='/dashboard' />
          
        </If>
      </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(NewCategory);
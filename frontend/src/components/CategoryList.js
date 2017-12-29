import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { getCategories } from '../actions/category';
import { getLocalUser } from '../actions/user';
import '../assets/css/CategoryList.css';

class CategoryList extends Component {
  componentWillMount() {
    this.props.getCategories(this.props.user.api_key);
  }

  render() {
    let categories = []

    for (let category of this.props.categories) {
      console.log(category.name)
      categories.push(
        <li key={category.id}>
          <div className="collapsible-header">
            <i className="material-icons">filter_drama</i>
            {category.name}
          </div>
          <div className="collapsible-body">
            <span>{category.description}</span>
            <p><small>
              {`Created by ${category.user_name.split(' ')[0]} ${
                moment(category.created_at, "YYYY-MM-DDTHH:mm:ss.SSSZ")
                .fromNow()
              }`}
            </small></p>
          </div>
        </li>
      )
    }
    return (
      <div className="row collapsible-container">
        <ul className="collapsible popout col s12 m6" data-collapsible="accordion">
          {categories}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  categories: state.categories,
})

const mapDispatchToProps = dispatch => ({
  getCategories: (apiKey) => dispatch(getCategories(apiKey)),
  getLocalUser: () => dispatch(getLocalUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
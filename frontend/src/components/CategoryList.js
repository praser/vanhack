import React, { Component } from 'react';
import $ from 'jquery';
import moment from 'moment';
import '../assets/css/CategoryList.css';

class CategoryList extends Component {
  componentDidMount() {
    $('.collapsible').collapsible();
  }

  render() {
    let categories = []

    for (let category of this.props.categories) {
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

export default CategoryList;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import FAB from './FixedActionButton';
import FASB from './FixedActionSubButton';
import CategoryList from './CategoryList';
import { getCategories } from '../actions/category';

class Dashboard extends Component {
  componentWillMount() {
    this.props.getCategories(this.props.user.api_key);
  }

  render() {
    return (
      <div>
        <CategoryList categories={this.props.categories} />

        <FAB color="red" icon="add">
          <FASB
            color="blue"
            icon="playlist_add"
            to="/categories/new"
          />
        </FAB>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  user: state.user,
  categories: state.categories,
})

const mapDispatchToProps = dispatch => ({
  getCategories: (apiKey) => dispatch(getCategories(apiKey))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

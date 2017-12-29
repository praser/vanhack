import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import '../assets/css/Header.css';
import { getLocalUser } from '../actions/user';
import If from '../components/If';
import SideNav from './SideNav';

class Header extends Component {
  componentWillMount() {
    this.props.getLocalUser();
  }

  render() {
    return (
      <div className="row">
        <nav className="teal darken-3">
          <div className="nav-wrapper">
            <NavLink exact to="/" className="brand-logo center">{this.props.children}</NavLink>

            <If test={Object.keys(this.props.user).length === 0} >
              <a href="/#" data-activates="mobile-demo" className="right button-collapse">
                <i className="material-icons">menu</i>
              </a>

              <ul className="right hide-on-med-and-down">
                <li><NavLink to="signup">Sign up</NavLink></li>
                <li><NavLink to="login">Login</NavLink></li>
              </ul>

              <ul id="mobile-demo" className="right side-nav">
                <li><NavLink to="signup" className="waves-effect">Sign up</NavLink></li>
                <li><NavLink to="login" className="waves-effect">Login</NavLink></li>
              </ul>
            </If>
            <SideNav />
          </div>
        </nav>
      </div>
    );
  }
}

Header.propTypes = {
  children: PropTypes.element.isRequired,
  user: PropTypes.object.isRequired,
  getLocalUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  getLocalUser: () => dispatch(getLocalUser()),
});

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(Header);

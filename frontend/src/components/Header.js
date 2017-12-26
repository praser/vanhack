import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import '../assets/css/Header.css';
import If from '../components/If';
import SideNav from './SideNav';

const Header = props => (
  <div className="row">
    <nav className="teal darken-3">
      <div className="nav-wrapper">
        <NavLink exact to="/" className="brand-logo center">{props.children}</NavLink>

        <If test={Object.keys(props.user).length === 0} >
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

Header.propTypes = {
  children: PropTypes.element.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.login,
});

export default connect(mapStateToProps, null, null, { pure: false })(Header);

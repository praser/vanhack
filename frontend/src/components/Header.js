import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import '../assets/css/Header.css';
import If from '../components/If';

const Header = props => (
  <div className="row">
    <nav className="teal darken-3">
      <div className="nav-wrapper">
        <NavLink exact to="/" className="brand-logo center">{props.children}</NavLink>
        <ul className="right">
          <If test={Object.keys(props.user).length === 0} >
            <li><NavLink to="/signup">Sign up</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
          </If>
          <If test={Object.keys(props.user).length !== 0}>
            <li><NavLink to="/logout">Logout</NavLink></li>
          </If>
        </ul>
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

export default connect(mapStateToProps)(Header);

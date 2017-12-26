import '../assets/css/Header.css';

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import If from '../components/If';

class Header extends Component{
  render() {
    return(
      <div className="row">
        <nav className="teal darken-3">
          <div className="nav-wrapper">
            <NavLink exact to="/" className="brand-logo center">{this.props.children}</NavLink>
            <ul className="right">
                <If test={Object.keys(this.props.user).length === 0} >
                  <li><NavLink to="/signup">Sign up</NavLink></li>
                  <li><NavLink to="/login">Login</NavLink></li>
                </If>
                <If test={Object.keys(this.props.user).length !== 0}>
                  <li><NavLink to="/logout">Logout</NavLink></li>
                </If>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.login
  }
}

export default connect(mapStateToProps)(Header);
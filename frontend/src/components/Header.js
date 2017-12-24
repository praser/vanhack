import '../assets/css/Header.css';

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import If from '../components/If';

class Header extends Component{
  constructor(props) {
    super(props);
    this.state = {loggedIn: (localStorage.getItem('apiKey') !== null)};
  }

  render() {
    return(
      <div className="row">
        <nav className="teal darken-3">
          <div className="nav-wrapper">
            <NavLink exact to="/" className="brand-logo center">{this.props.children}</NavLink>
            <ul className="right">
                <If test={this.state.loggedIn === false} >
                  <li><NavLink to="/signup">Sign up</NavLink></li>
                  <li><NavLink to="/login">Login</NavLink></li>
                </If>
                <If test={this.state.loggedIn}>
                  <li><NavLink to="/logout">Logout</NavLink></li>
                </If>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
};

export default Header
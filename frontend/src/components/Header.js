import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({children}) => (
  <div className="row">
    <nav className="teal darken-3">
      <div className="nav-wrapper">
        <NavLink exact to="/" className="brand-logo center">{children}</NavLink>
        <ul className="right">
          <li><NavLink to="/signup">Sign up</NavLink></li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Header
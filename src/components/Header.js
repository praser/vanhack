import React from 'react';
import { Row } from 'react-materialize';
import { NavLink } from 'react-router-dom';

const Header = ({children}) => (
  <Row>
    <nav className="blue-grey darken-3">
      <div className="nav-wrapper">
        <NavLink exact to="/" className="brand-logo center">{children}</NavLink>
        <ul className="right">
          <li><NavLink to="/signup">Sign up</NavLink></li>
        </ul>
      </div>
    </nav>
  </Row>
);

export default Header
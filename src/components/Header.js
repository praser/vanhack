import React from 'react';
import { Navbar, Row } from 'react-materialize';
import { NavLink } from 'react-router-dom';

const Header = ({children}) => (
  <Row>
    <Navbar brand={children} right className="blue-grey darken-3">
      <li><NavLink to="/signup">Sign up</NavLink></li>
    </Navbar>
  </Row>
);

export default Header
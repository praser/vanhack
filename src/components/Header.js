import React from 'react';
import { Navbar, Row } from 'react-materialize';

const Header = ({children}) => (
  <Row>
    <Navbar brand={children} right className="blue-grey darken-3" />
  </Row>
);

export default Header
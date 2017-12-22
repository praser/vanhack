import React from 'react';
import { Navbar, Row } from 'react-materialize';

const Header = ({children}) => (
  <Row>
    <Navbar brand={children} right />
  </Row>
);

export default Header
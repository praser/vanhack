import React from 'react';

const Logo = (props) => (
  <img src={ props.src } width={ props.width } height={ props.height } alt = { props.alt }/>
);

export default Logo
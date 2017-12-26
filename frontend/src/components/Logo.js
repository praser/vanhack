import React from 'react';
import PropTypes from 'prop-types';

const Logo = props => (
  <img src={props.src} width={props.width} height={props.height} alt={props.alt} />
);

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string.isRequired,
};

Logo.defaultProps = {
  width: 50,
  height: 50,
};

export default Logo;

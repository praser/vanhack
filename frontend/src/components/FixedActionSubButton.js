import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const FixedActionSubButton = props => (
  <li>
    <NavLink
      to={props.to}
      className={`btn-floating waves-effect waves-light ${props.color}`}
    >
      <i className="material-icons">{props.icon}</i>
    </NavLink>
  </li>
);

FixedActionSubButton.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export default FixedActionSubButton;

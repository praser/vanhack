import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const FixedActionSubButton = props => (
  <li>
    <NavLink
      to={props.to}
      className={`btn-floating tooltipped waves-effect waves-light ${props.color}`}
      data-position={props.tooltipPosition}
      data-tooltip={props.tooltipText}
    >
      <i className="material-icons">{props.icon}</i>
    </NavLink>
  </li>
);

FixedActionSubButton.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  tooltipPosition: PropTypes.string,
  tooltipText: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

FixedActionSubButton.defaultProps = {
  tooltipPosition: 'botton',
};

export default FixedActionSubButton;

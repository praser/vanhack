import React from 'react';
import PropTypes from 'prop-types';

const FixedActionSubButton = (props) => (
  <li>
    <a
      className={`btn-floating tooltipped waves-effect waves-light ${props.color}`}
      data-position={props.tooltipPosition}
      data-tooltip={props.tooltipText}
    >
      <i className="material-icons">{props.icon}</i>
    </a>
  </li>
);

FixedActionSubButton.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  tooltipPosition: PropTypes.string,
  tooltipText: PropTypes.string.isRequired,
}

FixedActionSubButton.defaultProps = {
  tooltipPosition: 'botton',
}

export default FixedActionSubButton;
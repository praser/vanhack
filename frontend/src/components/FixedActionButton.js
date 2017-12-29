import React from 'react';
import PropTypes from 'prop-types';

const FixedActionButton = props => (
  <div className={`fixed-action-btn ${props.direction}`}>
    <a className={`btn-floating btn-large waves-effect waves-light ${props.color}`}>
      <i className="large material-icons">{props.icon}</i>
    </a>
    <ul>
      {props.children}
    </ul>
  </div>
);

FixedActionButton.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  children: PropTypes.object,
  direction: PropTypes.string,
};

FixedActionButton.defaultProps = {
  children: {},
  direction: 'vertical',
};

export default FixedActionButton;

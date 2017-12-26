import PropTypes from 'prop-types';
import React from 'react';

const Input = props => (
  <div className={`input-field col ${[props.size, props.offset].join(' ')}`}>
    {props.children}
    <label
      htmlFor={props.name}
      data-error={props.msgError}
      data-success={props.msgSuccess}
    >{props.label}
    </label>
  </div>
);

Input.propTypes = {
  children: PropTypes.element,
  label: PropTypes.string.isRequired,
  msgError: PropTypes.string,
  msgSuccess: PropTypes.string,
  name: PropTypes.string.isRequired,
  offset: PropTypes.string,
  size: PropTypes.string,
};

Input.defaultProps = {
  children: '',
  msgError: 'Invalid',
  msgSuccess: '',
  offset: '',
  size: 's12',
};

export default Input;

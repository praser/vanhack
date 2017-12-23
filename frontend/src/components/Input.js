import React from 'react';

const Input = (props) => (
  <div className={`input-field col ${[props.size, props.offset].join(' ')}`}>
    <input name={props.name} value={props.value} type={props.type} />
    <label htmlFor={props.name}>{props.label}</label>
  </div>
)

export default Input
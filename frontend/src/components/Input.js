import React from 'react';

const Input = (props) => (
  <div className={`input-field col ${[props.size, props.offset].join(' ')}`}>
    {props.children}
    <label 
      htmlFor={props.name}
      data-error={props.msgError}
      data-success={props.msgSuccess}
    >{props.label}</label>
  </div>
)

export default Input
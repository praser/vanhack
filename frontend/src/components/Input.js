import React from 'react';

const Input = (props) => (
  <div className={`input-field col ${[props.size, props.offset].join(' ')}`}>
    <input
      name={props.name}
      value={props.value}
      type={props.type}
      className='validate'
      onChange={props.onChange}
      onBlur={props.onBlur}
      required={props.required}
    />
    <label 
      htmlFor={props.name}
      data-error={props.msgError}
      data-success={props.msgSuccess}
    >{props.label}</label>
  </div>
)

export default Input
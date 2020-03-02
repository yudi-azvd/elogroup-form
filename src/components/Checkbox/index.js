import React from 'react';

import './styles.css';

export default function Checkbox({label, onChange, checked }) {
  console.log('CRIEI CHECKBOX')
  return (
    <div className="checkbox-div">
      <input type="checkbox" id={label} name={label} onChange={onChange} checked={checked} />
      <label htmlFor={label}> {label} </label>
    </div>
  );
}


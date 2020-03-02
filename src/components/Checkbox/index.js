import React, { memo } from 'react';

import './styles.css';

function Checkbox({label, onChange, checked }) {
  console.log('CRIEI CHECKBOX')
  return (
    <div className="checkbox-div">
      <input type="checkbox" id={label} name={label} onChange={onChange} checked={checked} />
      <label htmlFor={label}> {label} </label>
    </div>
  );
}

// export default memo(Checkbox)
export default Checkbox

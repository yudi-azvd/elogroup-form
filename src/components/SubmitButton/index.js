import React from 'react';

import './styles.css'

export default function SubmitButton({enabled, loading, successMessage}) {
  return (
    <>
      <button 
        id="submit" 
        type="submit" 
        className={`${!enabled? 'disabled' : ''} ${loading? 'loading' : '' }`}
      >
        ENVIAR
      </button>
      {successMessage && <span id="success-message"> {successMessage} </span>}
    </>
  );
}

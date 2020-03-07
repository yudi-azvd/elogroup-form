import React from 'react';

import './styles.css'

export default function SubmitButton({enabled, loading, successMessage, pushedDown}) {
  return (
    <>
      <button 
        id="submit" 
        type="submit" 
        className={`${!enabled? 'disabled' : ''} ${loading? 'loading' : '' }`}
      >
        ENVIAR
      </button>
      {successMessage && <span className="success-message"> {successMessage} </span>}
    </>
  );
}

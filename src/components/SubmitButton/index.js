import React from 'react';

export default function SubmitButton({enabled, loading, successMessage}) {
  return (
    <>
      <button type="submit" className={`${!enabled? 'disabled' : ''} ${loading? 'loading' : '' } `}>ENVIAR</button>
      {successMessage && <span className="success-message"> {successMessage} </span>}
    </>
  );
}

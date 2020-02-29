import React from 'react';

import './App.css';

import logo from './assets/logo.svg'

function App() {
  function handleSubmit(event) {
    event.preventDefault()
    console.log(event.target.name.value)
  }

  return (
    <div className="content">
          <p>font-family: flexo bold  </p>
      <img id="logo" src={logo} alt="EloGroup"/>
      
      <form onSubmit={handleSubmit}>
        <div className="control-group">
          <input name="name" type="text" placeholder="Nome" />
        </div>
        
        <div className="control-group">
          <input name="phone" type="text" placeholder="Número de celular" />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;

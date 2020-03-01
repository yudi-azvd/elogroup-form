import React, { useState } from 'react';
// import { FaFacebookSquare, FaInstagram, FaLinkedin} from 'react-icons/fa';
// import {AiFillInstagram} from 'react-icons/ai';

import './App.css';

import logo from './assets/logo.svg'

function App() {
  const [hasSocialMedia, setHasSocialMedia] = useState(!true)

  function handleSubmit(event) {
    event.preventDefault()
    console.log(event.target.name.value)
  }

  function handleHasSocialMediaChange(event) {
    if (event.target.id === 'yes') {
      setHasSocialMedia(true)
    }
    else {
      setHasSocialMedia(false)
    }
  }

  return (
    <div className="content">
      <img id="logo" src={logo} alt="EloGroup"/>
      
      <form onSubmit={handleSubmit}>
        <div className="control-group">
          <label htmlFor="name">Nome</label>
          <input id="name" name="name" type="text" placeholder="Maria José da Silva" />
        </div>
        
        <div className="control-group">
          <label htmlFor="phone">Telefone</label>
          <input id="phone" name="phone" type="text" placeholder="Número de celular" />
        </div>

        {/* <hr/> */}
        <div className="control-group social-media">
          <div className="question">
            <span className="has-social-media-question">Possui redes sociais?</span>

            <div className="yes-or-no">
              <div className="yes">
                <input type="radio" name="hasSocialMedia" id="yes" onChange={handleHasSocialMediaChange} />
                <label htmlFor="yes">Sim</label>
              </div>
              <div className="no">
                <input type="radio" name="hasSocialMedia" id="no" onChange={handleHasSocialMediaChange} />
                <label htmlFor="no">Não</label>
              </div>
            </div>
          </div>

          { hasSocialMedia ? (
          <div>
            <input type="radio" id="facebook" name="facebook" value="facebook"/>
            <label htmlFor="facebook">Facebook</label>
          </div> 
          ) 
          : <span id="no-social-media">Não tenho mídias sociais</span>}
            
          </div>

        <button type="submit">ENVIAR</button>
      </form>
    </div>
  );
}

export default App;

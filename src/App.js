import React, { useState } from 'react';
// import { FaFacebookSquare, FaInstagram, FaLinkedin} from 'react-icons/fa';
// import {AiFillInstagram} from 'react-icons/ai';

import './App.css';

import logo from './assets/logo.svg'

import Checkbox from './components/Checkbox'

const socialMediaOptions = ['Facebook',  'Instagram',  'LinkedIn']

function App() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [hasSocialMedia, setHasSocialMedia] = useState('yes')
  const [socialMedia, setSocialMedia] = useState(
    socialMediaOptions.reduce((options, option) => ({
    ...options, 
    [option]: false
  }), {}))

  function handleNameChange(event) {
    setName(event.target.value)
  }

  function handlePhoneChange(event) {
    setPhone(event.target.value)
  }

  function handleHasSocialMediaChange(event) {
    console.log(event.target.value)
    setHasSocialMedia(event.target.value)

    if (event.target.value === 'no') {
      setSocialMedia(Object.keys(socialMedia).reduce((options, option) => ({
        ...options,
        [option]: false
      }), {}))
    }
  }

  function handleSocialMediaChange(event) {
    console.log(event.target.name, event.target.checked)
    console.log(socialMedia)
    setSocialMedia({
      ...socialMedia,
      [event.target.name]: event.target.checked
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    const { target } = event
    const data = {
      name: target.name.value,
      phone: target.phone.value,
      socialMedia: hasSocialMedia === 'no' 
        ? [] 
        : Object.keys(socialMedia).filter(key => socialMedia[key])
    }
    
    console.log(data)
  }

  return (
    <div className="content">
      <img id="logo" src={logo} alt="EloGroup"/>
      
      <form onSubmit={handleSubmit}>
        <div className="control-group">
          <label htmlFor="name">Nome</label>
          <input id="name" name="name" type="text" placeholder="Maria José da Silva" value={name} onChange={handleNameChange} />
        </div>
        
        <div className="control-group">
          <label htmlFor="phone">Telefone</label>
          <input id="phone" name="phone" type="text" placeholder="Número de celular" value={phone} onChange={handlePhoneChange} />
        </div>

        {/* <hr/> */}
        <div className="control-group social-media">
          <div className="question">
            <span className="has-social-media-question">Possui redes sociais?</span>

            <div className="yes-or-no">
              <div className="yes">
                <input type="radio" name="hasSocialMedia" value="yes" onChange={handleHasSocialMediaChange} checked={hasSocialMedia === 'yes'} />
                <label htmlFor="yes">Sim</label>
              </div>
              <div className="no">
                <input type="radio" name="hasSocialMedia" value="no" onChange={handleHasSocialMediaChange} checked={hasSocialMedia === 'no'} />
                <label htmlFor="no">Não</label>
              </div>
            </div>
          </div>

          { hasSocialMedia === 'yes' ? (
          <div className="control-group social-media-options">
            {Object.keys(socialMedia).map(socialMediaName => (
              <Checkbox key={socialMediaName} label={socialMediaName} onChange={handleSocialMediaChange} checked={socialMedia[socialMediaName]} />
            ))}
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

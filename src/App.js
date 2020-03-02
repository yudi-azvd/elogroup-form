import React, { useState } from 'react';
// import { FaFacebookSquare, FaInstagram, FaLinkedin} from 'react-icons/fa';
// import {AiFillInstagram} from 'react-icons/ai';

import './App.css';

import logo from './assets/logo.svg'

import Checkbox from './components/Checkbox'

const socialMediaOptions = ['Facebook',  'Instagram',  'LinkedIn']
const knowFromOptions = ['TV', 'Internet', 'Amigos', 'Outros']

function App() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [knowFrom, setKnowFrom] = useState({value: ''})
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

  function handleKnowFromChange(event) {
    console.log('handleKnowFromChange', event.target.value)
    setKnowFrom({value: event.target.value})
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
      knowFrom: knowFrom.value,
    }

    if (hasSocialMedia === 'yes') {
      data.socialMedia = Object
        .keys(socialMedia)
        .filter(key => socialMedia[key])
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

        <div className="control-group know-from">
          <label htmlFor="knowFrom">Como nos conheceu?</label>
          <select selected={knowFrom} name="knowFrom" onChange={handleKnowFromChange}>
            {knowFromOptions.map(k => (
              <option key={k} value={k}> {k} </option>
            ))}
          </select>
        </div>

        {/* <hr/> */}
        <div className="control-group social-media">
          <div className="question">
            <span className="has-social-media-question">Possui redes sociais?</span>

            <div className={`yes-or-no ${hasSocialMedia ? 'has-social-media' : 'has-no-social-media'}`}>
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
              
          <div className={`social-media-options ${hasSocialMedia === 'yes' ? 'show' : 'hide'}`}>
            { hasSocialMedia === 'yes' ? (
            <div>
              {Object.keys(socialMedia).map(socialMediaName => (
                <Checkbox 
                  key={socialMediaName} 
                  label={socialMediaName} 
                  onChange={handleSocialMediaChange} 
                  checked={socialMedia[socialMediaName]} 
                />
                ))}
              </div>
              ) 
            :
            <div className="no-social-media">
              <span>Não tenho redes sociais</span>
            </div> 
            }
          </div>
            
        </div>

        <button type="submit">ENVIAR</button>
      </form>
    </div>
  );
}

export default App;

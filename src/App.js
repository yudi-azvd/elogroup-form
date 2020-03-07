import React, { useState } from 'react';
import * as Yup from 'yup';

import api from './services/api'

import './App.css';

import logo from './assets/logo.svg'

import Checkbox from './components/Checkbox'
import PhoneInput from './components/PhoneInput'
import SubmitButton from './components/SubmitButton'

const socialMediaOptions = ['Facebook',  'Instagram',  'LinkedIn']
const knowFromOptions = ['TV', 'Internet', 'Amigos', 'Outros']

function App() {
  const [validationErrors, setValidationErrors] = useState({})
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [knowFrom, setKnowFrom] = useState({value: 'TV'})
  const [hasSocialMedia, setHasSocialMedia] = useState('no')
  const [socialMedia, setSocialMedia] = useState(
    socialMediaOptions.reduce((options, option) => ({
    ...options, 
    [option]: false
  }), {}))
  const [buttonEnabled, setButtonEnabled] = useState(true)
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const phoneMask = '99 - 99999999'

  const schema = Yup.object().shape({
    name: Yup
      .string()
      .test('first-name-last-name', 'Coloque nome e sobrenome', (value) => {
        return value.split(' ').length >= 2
      })
      .required('O nome é obrigatório'),
    phone: Yup.string().required('O telefone é obrigatório')
      .test('phone-mask', `Siga a formatação ${phoneMask}`, (value) => 
          value.length === phoneMask.length
      ),
    knowFrom: Yup.string().required('Informe por onde você nos conheceu'),
    socialMedia: Yup.array()
  })

  function handleNameChange(event) {
    setName(event.target.value)
  }

  function handlePhoneChange(event) {
    setPhone(event.target.value)
  }

  function handleKnowFromChange(event) {
    setKnowFrom({value: event.target.value})
  }

  function handleHasSocialMediaChange(event) {
    setHasSocialMedia(event.target.value)

    if (event.target.value === 'no') {
      setSocialMedia(Object.keys(socialMedia).reduce((options, option) => ({
        ...options,
        [option]: false
      }), {}))
    }
  }

  function handleSocialMediaChange(event) {
    setSocialMedia({
      ...socialMedia,
      [event.target.name]: event.target.checked
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()

    if (!buttonEnabled) {
      return
    }

    const { target } = event
    const data = {
      name: target.name.value,
      phone: target.phone.value,
      knowFrom: knowFrom.value,
    }

    // Pode vir um array vazio
    if (hasSocialMedia === 'yes') {
      data.socialMedia = Object
        .keys(socialMedia)
        .filter(key => socialMedia[key])
      
      // GAMBIARRA
      if (data.socialMedia.length === 0) {
        delete data.socialMedia
      }
    }

    try {
      setButtonEnabled(false)
      setLoading(true)

      await schema.validate(data, { abortEarly: false })
      await api.post('/', data)

      setLoading(false)
      setValidationErrors({})
      setSuccessMessage('Dados enviados com sucesso!')
      setTimeout(() => setSuccessMessage(''), 3000)
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errData = error.inner.reduce((errors, err) => ({
          ...errors,
          [err.path]: err.message
        }), {})

        setButtonEnabled(true)
        setValidationErrors(errData)
        setLoading(false)
      }
    }
  }

  return (
    <div className="content">
      <img id="logo" src={logo} alt="EloGroup"/>
      
      <form onSubmit={handleSubmit}>
        <div className="control-group">
          <label htmlFor="name">Nome <span className="mandatory-field">*</span></label>
          <input id="name" name="name" type="text" placeholder="Maria José da Silva" value={name} onChange={handleNameChange} />
          { validationErrors['name'] && <span className="validation-error"> {validationErrors['name']} </span> }
        </div>
        
        <div className="control-group">
          <label htmlFor="phone">Telefone <span className="mandatory-field">*</span></label>
          <PhoneInput id="phone" name="phone" type="tel" placeholder={phoneMask} mask={phoneMask} value={phone} onChange={handlePhoneChange}/> 
          { validationErrors['phone'] && <span className="validation-error"> {validationErrors['phone']} </span> }
        </div>

        <div className="control-group know-from">
          <label htmlFor="knowFrom">Como nos conheceu? <span className="mandatory-field">*</span> </label>
          <select selected={knowFrom} name="knowFrom" onChange={handleKnowFromChange}>
            {knowFromOptions.map(k => (
              <option key={k} value={k}> {k} </option>
            ))}
          </select>
          { validationErrors['knowFrom'] && <span className="validation-error"> {validationErrors['knowFrom']} </span> }
        </div>

        <div className="control-group social-media">
          <div className="question">
            <span className="has-social-media-question">Possui redes sociais?</span>

            <div className={`yes-or-no`}>
              <div className="yes">
                <input type="radio" id="yes" name="hasSocialMedia" value="yes" onChange={handleHasSocialMediaChange} checked={hasSocialMedia === 'yes'} />
                <label htmlFor="yes">Sim</label>
              </div>
              <div className="no">
                <input type="radio" id="no" name="hasSocialMedia" value="no" onChange={handleHasSocialMediaChange} checked={hasSocialMedia === 'no'} />
                <label htmlFor="no">Não</label>
              </div>
            </div>
          </div>

          <div className={`social-media-options ${hasSocialMedia === 'yes' ? 'show' : 'hide'}`}>
            {Object
              .keys(socialMedia)
              .map(socialMediaKey => (
                <Checkbox
                  key={socialMediaKey} 
                  label={socialMediaKey} 
                  onChange={handleSocialMediaChange} 
                  checked={socialMedia[socialMediaKey]} 
                />
              )
            )}
          </div>
        </div>
        
        <SubmitButton 
          pushedDown={hasSocialMedia === 'yes'}
          loading={loading} 
          enabled={buttonEnabled} 
          successMessage={successMessage} 
        />
      </form>
    </div>
  );
}

export default App;

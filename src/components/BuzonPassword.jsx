import React, { useState } from 'react'
import './buzonPassword.css'
import {AiFillEye} from 'react-icons/ai'
import {AiFillEyeInvisible} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { ErrorMessage } from './errorMessage'

export const BuzonPassword = ({handleBuzonPassword}) => {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  const navigate = useNavigate();

  const handlePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleErrorMessage = () => {
    setShowErrorMessage(false)
  }

  const handleEnviar = () => {
		if (password !== '') {
			localStorage.setItem('password', password)
			if (password === 'Qazokm33.') {
				navigate('/buzonData')
			} else setShowErrorMessage(true);
		} else {
			setShowErrorMessage(true);
		}
  }

  return (
    <div className='buzonPassword-global'>
      { showErrorMessage && <ErrorMessage handleErrorMessage = {handleErrorMessage}/> }
        <div className='buzonPassword-container'>
          <label htmlFor="password">Ingrese contraseña</label>
          <div className='buzon-input-container'>
            <input className='buzonPassword-input' value={password} onChange={e=>setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} />
            {showPassword ?
             <AiFillEye className='buzon-button-eye' onClick={handlePassword}/> :
             <AiFillEyeInvisible className='buzon-button-eye' onClick={handlePassword}/>
            }
          </div>
          <div className='buzon-button-container'>
            <p className='button-31 fix-enviar' onClick={handleEnviar}>Enviar</p>
            <button className='button-31 fix-cancelar' onClick={handleBuzonPassword}>Cancelar</button>
          </div>
        </div>
    </div>
  )
}

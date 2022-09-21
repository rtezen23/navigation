import React, { useState } from 'react'
import './buzonPassword.css'
import {AiFillEye} from 'react-icons/ai'
import {AiFillEyeInvisible} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

export const BuzonPassword = ({handleBuzonPassword}) => {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate();

  const handlePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleEnviar = () => {
		if (password !== '') {
			localStorage.setItem('password', password)
			if (password === '123') {
				navigate('/buzonData')
			} else alert('Contraseña incorrecta')
		} else {
			alert('Contraseña inválida')
		}
  }

  return (
    <div className='buzonPassword-global'>
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

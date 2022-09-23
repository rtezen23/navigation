import React from 'react'
import './styles/errorMessage.css'
import {VscError} from 'react-icons/vsc';

export const ErrorMessage = ({handleErrorMessage}) => {

  return (
    <div className='message-global'>
        <div className='message-container-error' >
            <VscError className='wrong'/>
            <h3>CONTRASEÑA INCORRECTA</h3>
            <div className='message-close-error' onClick={handleErrorMessage}>Aceptar</div>
        </div>
    </div>
  )
}

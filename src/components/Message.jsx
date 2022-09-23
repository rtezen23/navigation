import React from 'react'
import './styles/message.css'
import {AiFillCheckCircle} from 'react-icons/ai';

export const Message = ({handleMessage}) => {
  return (
    <div className='message-global'>
        <div className='message-container' >
            <AiFillCheckCircle className='check'/>
            <h3>REGISTRO AGREGADO</h3>
            <div className='message-close' onClick={handleMessage}>Aceptar</div>
        </div>
    </div>
  )
}

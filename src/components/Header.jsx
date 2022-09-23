import React from 'react'
import logo from '../assets/logo.jpg'
import './styles/header.css'

const Header = () => {
  return (
    <div className='header'>
      <h1 className='header-h1'>Intranet</h1>
      <div className='header-img-container'>
        <img src={logo} alt="logo" className='header-img'/>
        <h2>Cobranzas Perú</h2>
      </div>
    </div>
  )
}

export default Header
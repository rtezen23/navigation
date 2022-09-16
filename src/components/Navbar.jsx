import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import './navbar.css'

const Navbar = () => {

  const [showAplications, setshowAplications] = useState(false)

  const handleAplications = () => {
    setshowAplications(!showAplications)
  }

  return (
    <nav>
        <Header/>
        <ul className='navbar-ul'>
            <li>Home</li>
            <li className='aplications-container' onClick={handleAplications}>
              <p>Aplicaciones</p>
              { showAplications &&
                <ul className='aplications-links'>
                  <li>Link 1</li>
                  <li>Link 2</li>
                  <li>Link 3</li>
                  <li>Link 4</li>
                </ul>
              }
            </li>
            <li className='navbar-aplicaciones'>Políticas</li>
            <li>
              <Link to='/buzon' className='aplications-buzon'>
                Buzón de sugerencias y quejas
              </Link>
              </li>
        </ul>
    </nav>
  )
}

export default Navbar
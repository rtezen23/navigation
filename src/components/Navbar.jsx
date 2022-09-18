import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import {AiFillHome} from 'react-icons/ai';
import {RiComputerFill} from 'react-icons/ri';
import {BsFillBookmarkCheckFill} from 'react-icons/bs';
import {BsMailbox2} from 'react-icons/bs';
import './navbar.css'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)
  const [showClose, setShowClose] = useState(false)
  const [showAplications, setshowAplications] = useState(false)

  const handleAplications = () => {
    setshowAplications(!showAplications)
  }

  const handleToggle = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header>
        <Header/>
        <nav>
            <ul className={`navbar-ul ${showMenu && 'navbar-active'}`}>
                <li>
                  <Link className='navbar-link link-container'>
                    <AiFillHome className='navbar-icon'/>
                    <p>Home</p>
                  </Link>
                </li>
                <li className='aplications-container'>
                  <div className="link-container" onClick={handleAplications}>
                    <RiComputerFill className='navbar-icon'/>
                    <p> Aplicaciones</p>
                  </div>
                  { showAplications &&
                    <div className='aplications-links'>
                      <Link className='navbar-link'>Link 1</Link>
                      <Link className='navbar-link'>Link 2</Link>
                      <Link className='navbar-link'>Link 3</Link>
                      <Link className='navbar-link'>Link 4</Link>
                    </div>
                  }
                </li>
                <li className='navbar-aplicaciones'>
                  <Link className='navbar-link link-container'>
                    <BsFillBookmarkCheckFill className='navbar-icon'/>
                    <p>Políticas</p>
                  </Link>
                  </li>
                <li>
                  <Link className='navbar-link link-container aplications-buzon' to='/buzon' >
                    <BsMailbox2 className='navbar-icon'/>
                    <p>Buzón de sugerencias y quejas</p>
                  </Link>
                </li>
            </ul>
            <div className="navbar-toggle" onClick={handleToggle}>
              <div className={`toggle-line ${showMenu && 'line1'}`}></div>
              <div className={`toggle-line ${showMenu && 'line2'}`}></div>
              <div className={`toggle-line ${showMenu && 'line3'}`}></div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
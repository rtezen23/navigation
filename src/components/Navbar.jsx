import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import {AiFillHome} from 'react-icons/ai';
import {RiComputerFill} from 'react-icons/ri';
import {BsFillBookmarkCheckFill} from 'react-icons/bs';
import {BsMailbox2} from 'react-icons/bs';
import {FaBirthdayCake} from 'react-icons/fa';
import './navbar.css'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)
  const [showClose, setShowClose] = useState(false)
  const [showAplications, setshowAplications] = useState(false)

  const [vicidial, setVicidial] = useState(false);
  const [gestion, setGestion] = useState(false);
  const [grafana, setGrafana] = useState(false);

  const handleAplications = () => {
    setshowAplications(!showAplications)
  }

  const handleVicidial = () => {
    setVicidial(!vicidial);
  }

  const handleGestion = () => {
    setGestion(!gestion);
  }

  const handleGrafana = () => {
    setGrafana(!grafana);
  }

  const handleToggle = () => {
    setShowMenu(!showMenu)
  }

  console.log(vicidial)

  return (
    <header>
        <Header/>
        <nav>
            <ul className={`navbar-ul ${showMenu && 'navbar-active'}`}>
                <li>
                  <Link className='navbar-link link-container' to='/'>
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
                      <div className='aplications-item'>
                        <p className='navbar-link aplications-item_padre' onClick={handleVicidial}>VICIDIAL</p>
                        { vicidial &&
                          (<div className='aplications-item_hijo'>
                            <a className='navbar-link' href='http://190.102.134.255/vicidial/admin.php' target='_blank'>ADMIN</a>
                            <a className='navbar-link' href='http://190.102.134.255/agc/vicidial.php' target='_blank'>ASESOR</a>
                          </div>)
                        }
                      </div>
                      <div className='aplications-item'>
                        <p className='navbar-link aplications-item_padre' onClick={handleGestion}>SISTEMA DE GESTIÓN</p>
                        { gestion &&
                          (<div className='aplications-item_hijo'>
                            <a className='navbar-link' href='http://192.168.1.200/index.php' target='_blank'>ADMIN</a>
                            <a className='navbar-link' href='http://190.102.134.249/#/' target='_blank'>ASESOR</a>
                          </div>)
                        }
                      </div>
                      <div className='aplications-item'>
                        <p className='navbar-link aplications-item_padre' onClick={handleGrafana}>GRAFANA</p>
                        { grafana &&
                          (<div className='aplications-item_hijo'>
                            <a className='navbar-link' href='https://cobperu.grafana.net/' target='_blank'>GRAFANA 1</a>
                            <a className='navbar-link' href='http://190.102.134.251:3000/' target='_blank'>GRAFANA 2</a>
                          </div>)
                        }
                      </div>
                        <a className='navbar-link issabel' href='https://157.230.12.28/index.php' target='_blank'>ISSABEL</a>
                    </div>
                  }
                </li>
                <li className='navbar-aplicaciones'>
                  <Link className='navbar-link link-container' to='/'>
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
                <li>
                  <Link className='navbar-link link-container aplications-buzon' to='/' >
                    <FaBirthdayCake className='navbar-icon'/>
                    <p>Cumpleaños</p>
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
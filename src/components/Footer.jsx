import React from 'react';
import logo from '../assets/logo.jpg'
import './styles/footer.css'
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className='footer'>
        <ul className='footer-container'>
            <li className='footer-header'>
                <Link className='link-footer' to='/'>
                    <img src={logo} alt="" />
                    <h5>Cobranzas Perú</h5>
                </Link>
            </li>
            <li>
                <h5>Aplicaciones</h5>
                <ul className='aplicaciones-ul'>
                    <li>
                        <a href="http://190.102.134.255/vicidial/admin.php" target='_blank'>Vicidial Admin</a>
                        <a href="http://190.102.134.255/agc/vicidial.php" target='_blank'>Vicidial Asesor</a>
                    </li>
                    <li>
                        <a href="http://192.168.1.200/index.php" target='_blank'>Sistema Gestión Admin</a>
                        <a href="http://190.102.134.249/#/">Sistema Gestión Asesor</a>
                    </li>
                    <li>
                        <a href="https://cobperu.grafana.net/" target='_blank'>Grafana 1</a>
                        <a href="http://190.102.134.251:3000/" target='_blank'>Grafana 2</a>
                    </li>
                    <li>
                        <a href="https://157.230.12.28/index.php" target='_blank'>Issabel</a>
                    </li>
                </ul>
            </li>
            <li>
                <Link className='link-footer' to='/politicas' >
                    <h5>Políticas</h5>
                </Link>
            </li>
            <li>
                <Link className='link-footer' to='/buzon' >
                    <h5>Sugerencias y quejas</h5>
                </Link>
            </li>
            <li>
                <h5>Canales masivos</h5>
                <ul className='aplicaciones-ul'>
                    <li>
                        <a href="https://sms.intico.com.pe/Security/Login?reseller=B21295B42B" target='_blank'>SMS</a>
                    </li>
                    <li>
                        <a href="https://broadcast.itelvox.com/login.php?redirect=%2Fcontact_group.php" target='_blank'>IVR</a>
                    </li>
                    <li>
                        <a href="https://app.solymaster.com/customer/index.php/guest/index" target='_blank'>Mailing</a>
                    </li>
                    <li>
                        <a href="#">Bot</a>
                    </li>
                    <li>
                        <a href="#">Whatsapp</a>
                    </li>
                </ul>
            </li>
            <li>
                <Link className='link-footer' to='/cumpleanos' >
                    <h5>Cumpleaños</h5>
                </Link>
            </li>
        </ul>
    </div>
  )
}

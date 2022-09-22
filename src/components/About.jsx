import React from 'react'
import './about.css';

export default function About() {

    const aboutItems = [
        {
            title: 'Cobranza Preventiva',
            icon: <i class="fa-solid fa-info about-logo info-logo"></i>,
            description: 'Notificamos y buscamos asegurar que un cliente no pase a un tramo de mora',
        },
        {
            title: 'Cobranza Prejudicial',
            icon: <i className="fa-solid fa-hand-holding-dollar about-logo hand-logo"></i>,
            description: 'Gestión de Cobranza Integral desde el primer día de atraso hasta la etapa de Castigo.',
        },
        {
            title: 'Cobranza Judicial',
            icon: <i class="fa-solid fa-scale-balanced about-logo balance-logo"></i>,
            description: 'Gestión dual. Eficacia y orden en los procesos acompañados de cobranza telefónica y de campo.',
        }
    ]

  return (
    <section className='about-section'>
        <h3 className='about-h3'>Nuestros Principales Servicios</h3>
        <p className='about-p'>
            Somos COBRANZAS PERÚ, una empresa con 18 años de experiencia dedicada
            a la cobranza de créditos comerciales y financieros de importantes entidades
            del sistema financiero y microfinanciero.
        </p>
        <div className="about-container">
        {
            aboutItems.map(item => (
                <div className='about-item'>
                    {item.icon}
                    <h2 className='about-title'>{item.title}</h2>
                    <p className='about-text'>{item.description}</p>
                    <button className='about-button'>Leer más</button>
                </div>
        ))
        }
        </div>
    </section>
  )
}

import React from 'react'
import POLITICA_AMBIENTAL from '../assets/politicas/1.-POLITICA AMBIENTAL.pdf'
import MATRIZ_IPERC_2022 from '../assets/politicas/3 MATRIZ IPERC 2022.pdf'
import OBJETIVOS_METAS from '../assets/politicas/5. Objetivos y metas 2022.pdf'
import CODIGO_ETICA from '../assets/politicas/CODIGO DE ETICA (1).pdf'
import MAPA_RIESGOS from '../assets/politicas/Mapa de riesgos - Cobranzas Per.pdf'
import RISST_2022 from '../assets/politicas/RISST 2022.pdf'
import POLITICA_RESPONSABILIDAD_SOCIAL from '../assets/politicas/POLITICA DE RESPONSABILIDAD SOCIAL.pdf'
import OBJETIVOS_CALIDAD from '../assets/politicas/OBJETIVOS DE CALIDAD.pdf'
import './styles/politicas.css'

export const Politicas = () => {
  return (
    <section className='politicas-container'>
        <div className='politicas-items-container'>
            <div className="politicas-item">
                <p>CODIGO DE ETICA</p>
                <a href={CODIGO_ETICA} download>Descargar</a>
            </div>
            <div className="politicas-item">
                <p>MAPA DE RIESGOS - COBRANZAS PERU</p>
                <a href={MAPA_RIESGOS} download>Descargar</a>   
            </div>
            <div className="politicas-item">
                <p>MATRIZ IPERC 2022</p>
                <a href={MATRIZ_IPERC_2022} download>Descargar</a> 
            </div>
            <div className="politicas-item">
                <p>OBJETIVOS Y METAS</p>
                <a href={OBJETIVOS_METAS} download>Descargar</a>   
            </div>
            <div className="politicas-item">
                <p>OBJETIVOS DE CALIDAD</p>
                <a href={OBJETIVOS_CALIDAD} download>Descargar</a>   
            </div>
            <div className="politicas-item">
                <p>POLITICA AMBIENTAL</p>
                <a href={POLITICA_AMBIENTAL} download>Descargar</a>   
            </div>
            <div className="politicas-item">
                <p>POLITICA DE RESPONSABILIDAD SOCIAL</p>
                <a href={POLITICA_RESPONSABILIDAD_SOCIAL} download>Descargar</a>   
            </div>
            <div className="politicas-item">
                <p>RISST 2022</p>
                <a href={RISST_2022} download>Descargar</a>   
            </div>
        </div>
    </section>
  )
}

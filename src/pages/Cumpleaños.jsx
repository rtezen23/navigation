import React, { useEffect } from 'react'
import { useState } from 'react';
import {IoMdArrowDropleftCircle} from 'react-icons/io';
import {IoMdArrowDroprightCircle} from 'react-icons/io';
import {FaBirthdayCake} from 'react-icons/fa';
import axios from 'axios';
import './styles/cumpleaños.css'

const API_URL = `${process.env.REACT_APP_API_URL}api/v1/posts`;

export const Cumpleaños = () => {

  const [personal, setPersonal] = useState([])
  const [filtrados, setFiltrados] = useState([])
  const [mesActual, setMesActual] = useState(9)

  const colors = [
    '#F96666',
    '#829460',
    '#937DC2',
    '#FD841F',
    '#6F38C5',
    '#31E1F7',
    '#B1B2FF',
    '#ABD9FF',
    '#8758FF',
    '#25316D',
    '#1C6758',
    '#A460ED',
    '#16213E',
    '#E94560',
    '#FECD70',
    '#EB1D36',
    '#472D2D',
    '#42855B',
    '#6FEDD6',
    '#FF7F3F',
    '#277BC0',
    '#C0B236',
    '#781C68',
    '#42032C',
    '#293462',
    '#21E1E1',
    '#2A0944',
    '#EAE509',
    '#5800FF',
    '#224B0C',
    '#C21010',
    '#54BAB9',
    '#3120E0',
    '#21E1E1',
    '#002B5B',
    '#2A0944',
    '#3FA796',
    '#256D85',
    '#FEC260',
    '#A10035',
    '#FF1E00',
    '#100720',
    '#59CE8F',
    '#1C3879',
    '#31087B',
    '#411530',
    '#B93160',
    '#EAE509',
    '#5800FF',
    '#0096FF',
    '#2B7A0B',
    '#0F3D3E',
    '#355764',
    '#003865',
    '#EF5B0C',
    '#3CCF4E',
    '#2C3333',
    '#61481C',
    '#395B64',
    '#0078AA',
    '#293462',
    '#D61C4E',
    '#513252',
    '#231955',
    '#1F4690',
    '#495C83',
    '#3330E4',
    '#377D71',
    '#EB4747',
    '#576F72',
    '#A10035',
    '#3F4E4F',
    '#2C3639',
    '#610C63',
    '#1A4D2E',
    '#18978F',
    '#54BAB9',
    '#87805E',
    '#F4E06D',
    '#4C3A51',
    '#3AB0FF',
  ]

  const randomColor = () => {
    const random = Math.floor((Math.random() * (colors.length - 0 + 1)) + 0)
    return colors[random];
  }

  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre']

  const previousMonth = () => {
    if (mesActual === 1) {
      setMesActual(12);
    }
    else setMesActual(prevMesActual => prevMesActual - 1);
  }
  
  const nextMonth = () => {
    if (mesActual === 12) {
      setMesActual(1);
    }
    else setMesActual(prevMesActual => prevMesActual + 1);
  }

  // const dia = fecha.slice(0,2);
  // const mes = fecha.slice(3,5);
  // const day = fecha.slice(3,5);
  
  const filtrarActuales = (personal) => {
    const filtrados = personal?.filter(persona => {
      let month = Number(persona.fecha_nacimiento.slice(5,7));
      return month === mesActual
    })
    return filtrados;
  }

  const ordenarFiltro = (datos) => {
    return datos.sort(function (a, b) {
      if (a.fecha_nacimiento.slice(8,10) > b.fecha_nacimiento.slice(8,10)) {
        return 1;
      }
      if (a.fecha_nacimiento.slice(8,10) < b.fecha_nacimiento.slice(8,10)) {
        return -1;
      }
      return 0;
    });
  }

  useEffect(() => {
    setFiltrados(ordenarFiltro(filtrarActuales(personal)))
  }, [mesActual])

  useEffect(() => {
    axios.get('api/v1/cumples')
    .then(res => {
      setPersonal(res.data.cumples)
      setFiltrados(ordenarFiltro(filtrarActuales(res.data.cumples)))
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <div className="mes-slider">
        <div className='leftArrowMonth' onClick={previousMonth}>
            <IoMdArrowDropleftCircle/>
        </div>
        <h1 className='mes-h1'>{meses[mesActual-1]}</h1>
        <div className='rightArrowMonth' onClick={nextMonth}>
            <IoMdArrowDroprightCircle/>
        </div>
      </div>
        {
          filtrarActuales && (
            <ul className='card-container'>
              {
                filtrados?.map(item => (
                  <li key={item.dni} className='card-item' style={{backgroundColor: `${randomColor()}`}}>
                    <div className='card-header'>
                      <p>{item.dni}</p>
                      <FaBirthdayCake className='card-cake'/>
                    </div>
                    <h3 className='card-body'>{item.apellidos_y_nombres}</h3>
                    <p className='card-footer'>{item.fecha_nacimiento.slice(8, 10)}</p>
                  </li>
                ))
              }
            </ul>
          )
        }
    </div>
  )
}

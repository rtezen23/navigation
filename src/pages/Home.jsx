import React from 'react'
import { Slider } from '../components/Slider';
import '../components/styles/slider.css';
import img from '../assets/background.png'
import img2 from '../assets/1.png'
import img3 from '../assets/2.png'
import './styles/home.css'
import About from '../components/About';

const slides = [
  // { url: img, title: 'first image'},
  { url: img2, title: 'second image'},
  { url: img3, title: 'third image'},
]

export const Home = () => {
  return (
    <div>
      <div className='containerStyles'>
       <Slider slides={slides}/> 
      </div>
      {/* <img className='imagen' src={img} alt="a" /> */}
      <About/>
      <ul className='home-ul'>
        <li className='home-li'>
          <a className='home-a' href="https://app.powerbi.com/view?r=eyJrIjoiNTM3MWQ1MjEtZDA3NS00M2M2LWI5ZWItMjhjNGMxOGI0NTdiIiwidCI6IjBlZDgxOGZlLWU5ZjEtNGZhZC1hOGZjLThkYmViYzc2ODZhZCJ9&pageName=ReportSectionc0cffa8257dbc2a46686" target='target-iframe'>Falabella</a>
        </li>
        <li className='home-li'>
          <a className='home-a' href="https://app.powerbi.com/view?r=eyJrIjoiYWYxYWZiMWEtZTdlNy00M2YxLWI5MWQtZmY1MGI4YjhhZDEzIiwidCI6IjBlZDgxOGZlLWU5ZjEtNGZhZC1hOGZjLThkYmViYzc2ODZhZCJ9&pageName=ReportSectiona45d8bf31908e589ece3" target='target-iframe'>Tablero de Control</a>
        </li>
      </ul>

      {/* <iframe title="FALABELLA CASTIGO" className='home-iframe' src="https://app.powerbi.com/view?r=eyJrIjoiNTM3MWQ1MjEtZDA3NS00M2M2LWI5ZWItMjhjNGMxOGI0NTdiIiwidCI6IjBlZDgxOGZlLWU5ZjEtNGZhZC1hOGZjLThkYmViYzc2ODZhZCJ9&pageName=ReportSectionc0cffa8257dbc2a46686" frameborder="0" allowFullScreen="true"></iframe>
      <iframe title="TABLERO DE CONTROL" className='home-iframe' src="https://app.powerbi.com/view?r=eyJrIjoiYWYxYWZiMWEtZTdlNy00M2YxLWI5MWQtZmY1MGI4YjhhZDEzIiwidCI6IjBlZDgxOGZlLWU5ZjEtNGZhZC1hOGZjLThkYmViYzc2ODZhZCJ9&pageName=ReportSectiona45d8bf31908e589ece3" frameborder="0" allowFullScreen="true"></iframe> */}
      <iframe src='https://app.powerbi.com/view?r=eyJrIjoiNTM3MWQ1MjEtZDA3NS00M2M2LWI5ZWItMjhjNGMxOGI0NTdiIiwidCI6IjBlZDgxOGZlLWU5ZjEtNGZhZC1hOGZjLThkYmViYzc2ODZhZCJ9&pageName=ReportSectionc0cffa8257dbc2a46686' style={{border: 'none'}} name='target-iframe' className='home-iframe'></iframe>
    </div>
  )
}

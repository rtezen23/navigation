import React from 'react'
import { Slider } from '../components/Slider';
import '../components/slider.css';

const slides = [
  { url: '../src/assets/banner.jpg', title: 'first image'},
]

export const Home = () => {
  return (
    // <div className='containerStyles'>
        // <Slider slides={slides}/> 
        <img className='imagen' src="../src/assets/banner.jpg"  alt="a" />
    // </div>
  )
}

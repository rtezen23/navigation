import React from 'react'
import { useState } from 'react'
import { BsCircleFill } from 'react-icons/bs'
import { IoMdArrowDropleftCircle } from 'react-icons/io'
import { IoMdArrowDroprightCircle } from 'react-icons/io'
import './slider.css'

export const Slider = ({ slides }) => {

    const [ currentIndex, setCurrentIndex ] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isFirstSlide = currentIndex === slides.length - 1;
        const newIndex = isFirstSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex)
    }

  return (
    <div className='sliderStyles'>
        <div className='leftArrowStyles' onClick={goToPrevious}>
            <IoMdArrowDropleftCircle/>
        </div>
        <div className='rightArrowStyles' onClick={goToNext}>
            <IoMdArrowDroprightCircle/>
        </div>
        <img className='slideStyles' src={`${slides[currentIndex].url}`} alt={`${slides[currentIndex].title}`} />
        <div className='dotsContainerStyles'>
            {slides.map((slide, index) => (
                <BsCircleFill key={index} className={`dotStyles ${currentIndex === index && 'dotSelected'}`} onClick={()=>goToSlide(index)}/>
            ))
            }
        </div>
    </div>
  )
}

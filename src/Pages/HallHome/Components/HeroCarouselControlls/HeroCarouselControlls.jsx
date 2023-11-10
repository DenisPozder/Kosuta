import React from 'react'
import './hero-carousel-controlls.css'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const HeroCarouselControlls = ({ prev, next }) => {
  return (
    <div>
        <button className='hcc-btn hcc-left' onClick={prev}><AiOutlineLeft /></button>
        <button className='hcc-btn hcc-right' onClick={next}><AiOutlineRight /></button>
    </div>
  )
}

export default HeroCarouselControlls
import React from 'react'
import './hero-carousel-item.css'
import { Link } from 'react-router-dom'

const HeroCarouselItem = ( { slide, stopSlide, startSlide }) => {
  return (
    <div className="hhc-carousel-item" onMouseEnter={stopSlide} onMouseLeave={startSlide}>
      <img src={slide.image} alt={slide.title} />
      <div className="hhc-carousel-overlay"></div>
      <div className="hhc-carousel-text">
        <h1>{slide.title}</h1>
        <Link to={slide.link}>Pogledajte još</Link>
      </div>
    </div>
  )
}

export default HeroCarouselItem
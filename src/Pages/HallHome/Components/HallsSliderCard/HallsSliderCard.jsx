import React from 'react'
import './halls-slider-card.css'

const HallsSliderCard = ({ slide, index, current }) => {
  return (
    <div className='halls-slider-card'>
        {
            index === current && (
                <div className="halls-slider-slide">
                    <img src={slide.image} alt="Slika u slajderu" />
                    <div className="hss-overlay"></div>
                </div>
            )
        }
    </div>
  )
}

export default HallsSliderCard
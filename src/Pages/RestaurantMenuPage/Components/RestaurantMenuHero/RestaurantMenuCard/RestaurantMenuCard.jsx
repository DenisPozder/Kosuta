import React from 'react'
import './restaurant-menu-card.css'

const RestaurantMenuCard = ({ slide, index, current }) => {
  return (
    <div className="restaurant-menu-card">
        {
            index === current && (
                <div className="rmc-slide">
                    <img src={slide.fullImage} alt={`Slika ${index + 1}`} />
                    <div className="rmcs-radial-overlay"></div>
                    <div className="rmcs-overlay"></div>
                    <div className="rmcs-overlay2"></div>
                    <div className="rmcs-content">
                        <div className="rmcs-wrap">
                            <div className="rmcs-inner">
                                <div className="rmcs-left">
                                    <h1>{slide.title}</h1>
                                    <h3>{slide.desc}</h3>
                                </div>
                                <div className="rmcs-right">
                                    <img src={slide.image} alt={`Slika ${index + 1}`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default RestaurantMenuCard
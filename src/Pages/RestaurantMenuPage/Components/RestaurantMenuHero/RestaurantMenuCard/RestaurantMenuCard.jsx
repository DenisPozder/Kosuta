import React from 'react'
import './restaurant-menu-card.css'
import topLeaves from '../../../../../Assets/Landing/topLeaves.png'

const RestaurantMenuCard = ({ slide, index, current }) => {
  return (
    <div className="restaurant-menu-card">
        {
            index === current && (
                <div className="rmc-slide">
                    <img src={topLeaves} alt="Dekorativna slika" className='rs-top-leaves' />
                    <img src={slide.fullImage} alt={`Slika ${index + 1}`} className='rs-full-image' />
                    <div className="rmcs-radial-overlay"></div>
                    <div className="rmcs-overlay"></div>
                    <div className="rmcs-overlay2"></div>
                    <div className="rmcs-content">
                        <div className="rmcs-wrap">
                            <div className="rmcs-inner">
                                <div className="rmcs-left">
                                    <div className="rmcs-items">
                                    <h1>{slide.title}</h1>
                                    <h3>{slide.desc}</h3>
                                    </div>
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
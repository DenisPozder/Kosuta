import React from 'react'
import './restaurant-hero-card.css'
import restaurantTree from '../../../../../Assets/Landing/restaurantTree.png'
import restaurantTree2 from '../../../../../Assets/Hall/forestTree2.png'
import { Link } from 'react-router-dom'

const RestaurantHeroCard = ({ index, current, slide }) => {
  return (
    <div className="restaurant-hero-card">
        {
            index === current && (
                <div className="rhc-slide">
                    <img src={restaurantTree} alt="Dekorativna slika" className='rhc-tree1-img parallax' />
                    <img src={restaurantTree2} alt="Dekorativna slika" className='rhc-tree2-img parallax' />
                    <div className="rhcs-radial-overlay"></div>
                    <div className="rhcs-bottom-overlay"></div>
                    <div className="rhcs-overlay"></div>
                    <img className='rhcs-img' src={slide.image} alt={`Image ${index + 1}`} />
                    <div className="rhc-slide-content">
                        <div className="rhcs-inner">
                            <div className="rhcsi-text">
                                <h1>{slide.title}</h1>
                                <h3 className='rhcsi-h3'>{slide.desc}</h3>
                                <Link to={slide.link}><h3>Pogledajte još</h3></Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default RestaurantHeroCard
import React from 'react'
import './restaurant-gallery-slider.css'
import { Link } from 'react-router-dom'
import RGSlider from './RGSlider/RGSlider'

const RestaurantGallerySlider = ({ data }) => {
  return (
    <div className="restaurant-gallery-slider">
        <div className="rgs-content">
            <h1>Galerija</h1>
            <RGSlider data={data} />
            <Link to={`/restoran/galerija`} className='rgs-btn'>Vidite još</Link>
        </div>
    </div>
  )
}

export default RestaurantGallerySlider
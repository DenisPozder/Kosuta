import React from 'react'
import './restaurant-gallery-card.css'

const RestaurantGalleryCard = ({ image }) => {
  return (
    <div className="restaurant-gallery-card">
        <div className="rgc-inner">
            <img src={image.image} alt="Slika u galeriji" />
        </div>
    </div>
  )
}

export default RestaurantGalleryCard
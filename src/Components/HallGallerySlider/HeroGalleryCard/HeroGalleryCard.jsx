import React from 'react'
import './hero-gallery-card.css'

const HeroGalleryCard = ({ image }) => {
  return (
    <div className="hero-gallery-card">
        <div className="hgc-inner">
            <img src={image.image} alt="Slika u galeriji" />
        </div>
    </div>
  )
}

export default HeroGalleryCard
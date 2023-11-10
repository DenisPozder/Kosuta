import React from 'react'
import './hall-gallery-slider.css'
import HGSlider from './HGSlider/HGSlider'
import { Link } from 'react-router-dom'

const HallGallerySlider = ({ data }) => {

  return (
    <div className="hall-gallery-slider">
      <div className="hgs-content">
        <h1>Galerija</h1>
        <HGSlider data={data} />
        <Link to={`/proslave/galerija`} className='hgs-btn'>Vidite još</Link>
      </div>
    </div>
  )
}

export default HallGallerySlider
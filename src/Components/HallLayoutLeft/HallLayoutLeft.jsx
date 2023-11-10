import React from 'react'
import './hall-layout-left.css'

const HallLayoutLeft = ({ text, image, imageDecoration }) => {
  return (
    <div className='hall-layout-left'>
        <div className="hll-content">
            <div className="hll-column">
                <img src={image} alt="Slika" />
            </div>
            <img className='hll-decoration' src={imageDecoration} alt="Dekorativna slika" />
            <div className="hll-column">
                <h3>{text}</h3>
            </div>
        </div>
    </div>
  )
}

export default HallLayoutLeft
import React from 'react'
import './hall-slider-text-layout.css'
import HSTSlider from './HSTSlider/HSTSlider'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";

const HallSliderTextLayout = ({title1, title2, desc, images, layout, capacity, autoplayDuration, link}) => {
  return (
    <div className={`hall-slider-text-layout`}>
        {
            layout === "left" ? (
                <>
                <div className="hstl-slider">
                    <HSTSlider data={images} autoplayDuration={autoplayDuration} />
                </div>
                <div className="hstl-content">
                    <div className="hstl-text">
                    <h1><span>{title1}</span><span>{title2}</span></h1>
                    <h3>{desc}</h3>
                    <h2>Kapacitet: <span>{capacity}</span></h2>
                    <Link to={link}><h3>Rezerviši salu</h3><FaAngleRight /></Link>
                    </div>
                </div>
                </>
            ) : (
                <>
                <div className="hstl-content">
                    <div className="hstl-text">
                    <h1><span>{title1}</span><span>{title2}</span></h1>
                    <h3>{desc}</h3>
                    <h2>Kapacitet: <span>{capacity}</span></h2>
                    <Link to={link}><h3>Rezerviši salu</h3><FaAngleRight /></Link>
                    </div>
                </div>
                <div className="hstl-slider">
                    <HSTSlider data={images} autoplayDuration={autoplayDuration} />
                </div>
                </>
            )
        }
    </div>
  )
}

export default HallSliderTextLayout
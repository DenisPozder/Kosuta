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
                <div className="hstl-slider slide-in from-left">
                    <HSTSlider data={images} autoplayDuration={autoplayDuration} />
                </div>
                <div className="hstl-content-wrap slide-in from-right">
                    <div className="hstl-text">
                    <h1 className='hstl-title'><span>{title1}</span><span>{title2}</span></h1>
                    <p className='hstl-desc'>{desc}</p>
                    <h2 className='hstl-capacity'>Kapacitet: <span>{capacity}</span></h2>
                    <div className="hstl-btn">
                    <Link to={link}><h3>Rezerviši salu</h3><FaAngleRight /></Link>
                    </div>
                    </div>
                </div>
                </>
            ) : (
                <>
                <div className="hstl-content-wrap slide-in from-left">
                    <div className="hstl-text hstl-left">
                    <h1 className='hstl-title'><span>{title1}</span><span>{title2}</span></h1>
                    <p className='hstl-desc'>{desc}</p>
                    <h2 className='hstl-capacity'>Kapacitet: <span>{capacity}</span></h2>
                    <div className="hstl-btn">
                    <Link to={link}><h3>Rezerviši salu</h3><FaAngleRight /></Link>
                    </div>
                    </div>
                </div>
                <div className="hstl-slider hstl-right slide-in from-right">
                    <HSTSlider data={images} autoplayDuration={autoplayDuration} />
                </div>
                </>
            )
        }
    </div>
  )
}

export default HallSliderTextLayout
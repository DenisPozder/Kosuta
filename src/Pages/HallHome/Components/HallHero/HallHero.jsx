import React, { useEffect, useRef, useState } from 'react'
import './hall-hero.css'
import MainHallVideo from '../../../../Assets/Hall/mainHallVideo.mp4'
import forestTree2 from '../../../../Assets/Hall/forestTree2.png'
import forestTree3 from '../../../../Assets/Hall/forestTree3.png'
import bushes from '../../../../Assets/Hall/bushes.png'
import { HallsSliderData } from '../../../../HallData/HallsSliderData'
import {Link} from 'react-router-dom'

const HallHero = () => {

  const [ current, setCurrent ] = useState(0)
  const length = HallsSliderData.length
  const timeout = useRef(null)

  useEffect(() => {
      const nextSlide = () => {
          setCurrent(current => (current === length - 1 ? 0 : current + 1))
      }

      timeout.current = setTimeout(nextSlide, 8000)

      return function() {
          if(timeout.current) {
              clearTimeout(timeout.current)
          }
      }
  },[current, length])

  const nextSlide = () => {
      if(timeout.current) {
          clearTimeout(timeout.current)
      }
      setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
      if(timeout.current) {
          clearTimeout(timeout.current)
      }
      setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if(!Array.isArray(HallsSliderData) || HallsSliderData.length <= 0) {
      return null
  }

  return (
    <div className='hall-hero'>
      <div className="hh-video">
        <video src={MainHallVideo} muted loop autoPlay></video>
      </div>
      <div className="hall-hero-overlay"></div>
      <img className='hh-forest-tree1 parallax' data-speedx="0.03" data-speedy="0.03" data-speedz="0.06" data-rotation="0.06" src={forestTree2} alt="Dekorativna slika" />
      <div className="hhft-overlay1"></div>
      <img className='hh-forest-tree2 parallax' data-speedx="0.01" data-speedy="0.01" data-speedz="0" data-rotation="0" src={forestTree3} alt="Dekorativna slika" />
      <div className="hhft-overlay2"></div>
      <img className='hh-forest-bushes parallax' data-speedx="0.05" data-speedy="0.05" data-speedz="0.09" data-rotation="0.09" src={bushes} alt="Dekorativna slika" />
      <div className="hh-main-overlay"></div>
      <div className="hall-hero-content">
        <div className="hall-hero-content-wrap">
          {
            HallsSliderData.map((slide, index) => (
              <div className="hhcw-card-content" key={index}>
                {
                  index === current && (
                    <div className="hhcw-card-content-slide">
                      <div className="hhcw-left">
                        <h1>{slide.title}</h1>
                        <h3>{slide.desc}</h3>
                        <Link to={slide.link}><h3>Pogledajte još</h3></Link>
                      </div>
                      <div className="hhcw-right">
                        <img src={slide.image} alt={slide.title} />
                      </div>
                    </div>
                  )
                }
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default HallHero
import React, { useEffect, useRef, useState } from 'react'
import './hall-hero.css'
import {Link} from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";
import bigHall from '../../../../Assets/Hall/hall1.jpg'
import mediumHall from '../../../../Assets/Hall/svecana2.jpg'
import smallHall from '../../../../Assets/Hall/kamin13.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTranslation } from 'react-i18next';

const hallImages = [
  {
    image: bigHall
  },
  {
    image: mediumHall
  },
  {
    image: smallHall
  },
]

const HallHero = () => {

  const { t } = useTranslation('hallHome')
  const [ current, setCurrent ] = useState(0)
  const length = hallImages.length
  const timeout = useRef(null)

  useEffect(() => {
      const nextSlide = () => {
          setTimeout(() => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
          })
          timeout.current = setTimeout(nextSlide, 6000)
      }

      timeout.current = setTimeout(nextSlide, 6000)

      return function() {
          if(timeout.current) {
              clearTimeout(timeout.current)
          }
      }
  },[current, length])

  if(!Array.isArray(hallImages) || hallImages.length <= 0) {
      return null
  }

  return (
    <div className='hall-hero'>
      <div className="hh-image-slider">
        {
          hallImages.map((image, index) => (
            <div className='hh-slider' key={index}>
              {
                index === current && (
                  <div className="hh-slider-card">
                    <LazyLoadImage src={image.image} alt={`${index + 1}`} />
                  </div>
                )
              }
            </div>
          ))
        }
      </div>
      <div className="hh-overlay"></div>
      <div className="hh-content">
        <div className="hh-content-text">
          <h1 className='hh-title'><span>{t('hhTitle1')}</span><span>{t('hhTitle2')}</span></h1>
          <h3 className='hh-desc'>{t('hhDesc')}</h3>
          <Link to='/sale'><h3>{t('hhBtn')}</h3><FaAngleRight /></Link>
        </div>
      </div>
    </div>
  )
}

export default HallHero
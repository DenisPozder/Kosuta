import React, { useEffect, useRef, useState } from 'react'
import './restaurant-about-hero.css'
import restaurantImage from '../../../../Assets/Restaurant/restaurantImage.jpg'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const RestaurantAboutSlider = [
  {
    title: "Restoran Košuta",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: restaurantImage,
  },
  {
    title: "Igraonica",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: restaurantImage,
  },
  {
    title: "Jelovnik",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: restaurantImage,
  },
  {
    title: "Galerija našeg restorana",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: restaurantImage,
  },
]

const RestaurantAboutHero = () => {

  const [ current, setCurrent ] = useState(0)
  const length = RestaurantAboutSlider.length
  const timeout = useRef(null)

  useEffect(() => {
      const nextSlide = () => {
          setTimeout(() => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
          })
          timeout.current = setTimeout(nextSlide, 8000)
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

  if(!Array.isArray(RestaurantAboutSlider) || RestaurantAboutSlider.length <= 0) {
      return null
  }

  return (
    <div className="restaurant-about-hero">
      <div className="rah-slider">
        <button className='rahs-btn rahs-prev' onClick={prevSlide}><AiOutlineLeft /></button>
        {
          RestaurantAboutSlider.map((slide, index) => (
            <div className="rah-content" key={index}>
              {
                index === current && (
                  <div className="rah-card-wrap">
                    <img src={slide.image} alt={slide.title} />
                    <div className="rah-card-overlay"></div>
                    <div className="rah-card-content">
                      <div className="rah-card-text">
                        <h1 className='rahc-title'>{slide.title}</h1>
                        <h3 className='rahc-desc'>{slide.desc}</h3>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
          ))
        }
        <button className='rahs-btn rahs-next' onClick={nextSlide}><AiOutlineRight /></button>
      </div>
    </div>
  )
}

export default RestaurantAboutHero
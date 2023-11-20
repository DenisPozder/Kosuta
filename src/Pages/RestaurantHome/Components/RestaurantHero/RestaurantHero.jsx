import React, { useEffect, useRef, useState } from 'react'
import './restaurant-hero.css'
import HeroMenuImg from '../../../../Assets/Restaurant/HeroMenuImg.png'
import HeroAboutUsImg from '../../../../Assets/Restaurant/HeroAboutUs.png'
import HeroGameroomImg from '../../../../Assets/Restaurant/HeroGameroomImg.png'
import RestaurantHeroCard from './RestaurantHeroCard/RestaurantHeroCard'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const HeroItems = [
  {
    title: "Dobrodošli u restoran Košuta",
    image: HeroMenuImg,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "/restoran/jelovnik"
  },
  {
    title: "O našem restoranu",
    image: HeroAboutUsImg,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "/restoran/o-nama"
  },
  {
    title: "O našem igralištu",
    image: HeroGameroomImg,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "/restoran/igralište"
  },
]

const RestaurantHero = ({slides}) => {

  const [ current, setCurrent ] = useState(0)
  const length = slides.length
  const timeout = useRef(null)

  useEffect(() => {
      const nextSlide = () => {
          setTimeout(() => {
              setCurrent(current => (current === length - 1 ? 0 : current + 1))
          }, 7000)
          timeout.current = setTimeout(nextSlide, 12000)
      }

      timeout.current = setTimeout(nextSlide, 12000)

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

  if(!Array.isArray(slides) || slides.length <= 0) {
      return null
  }

  return (
    <div className="restaurant-hero">
      <div className="rh-wrap">
        <button className='rhw-btn rhw-prev' onClick={prevSlide}><AiOutlineLeft /></button>
        {
          slides.map((slide, index) => (
            <RestaurantHeroCard key={index} slide={slide} index={index} current={current} />
          ))
        }
        <button className='rhw-btn rhw-next' onClick={nextSlide}><AiOutlineRight /></button>
      </div>
    </div>
  )
}

export default RestaurantHero
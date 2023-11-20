import React, { useEffect, useRef, useState } from 'react'
import './restaurant-menu-hero.css'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import RestaurantMenuCard from './RestaurantMenuCard/RestaurantMenuCard'

const RestaurantMenuHero = ({ slides }) => {

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
    <div className="restaurant-menu-hero">
        <div className="rmh-wrap">
            <button className='rmh-btn rmh-prev' onClick={prevSlide}><AiOutlineLeft /></button>
            {
                slides.map((slide, index) => (
                    <RestaurantMenuCard index={index} slide={slide} current={current} key={index} />
                ))
            }
            <button className='rmh-btn rmh-next' onClick={nextSlide}><AiOutlineRight /></button>
        </div>
    </div>
  )
}

export default RestaurantMenuHero
import React, { useEffect, useRef, useState } from 'react'
import './restaurant-celebrations.css'
import restaurantImage from '../../../../Assets/Restaurant/restaurantImage.jpg'
import branchLeftImg from '../../../../Assets/Restaurant/branchLeft.png'
import branchRightImg from '../../../../Assets/Restaurant/branchRight.png'
import LeavesLeft from '../../../../Assets/Restaurant/leavesImg.png'

const ResCelebrationsImg = [
    {
        id: 1,
        image: restaurantImage
    },
    {
        id: 1,
        image: restaurantImage
    },
    {
        id: 1,
        image: restaurantImage
    },
    {
        id: 1,
        image: restaurantImage
    },
    {
        id: 1,
        image: restaurantImage
    },
]

const RestaurantCelebrations = () => {

    const [ currentSlide, setCurrentSlide ] = useState(0)
    const lengthCel = ResCelebrationsImg.length
    const timeoutCel = useRef(null)
  
    useEffect(() => {
        const nextSlide = () => {
            setTimeout(() => {
                setCurrentSlide(currentSlide => (currentSlide === lengthCel - 1 ? 0 : currentSlide + 1))
            }, 7000)
            timeoutCel.currentSlide = setTimeout(nextSlide, 3000)
        }
  
        timeoutCel.currentSlide = setTimeout(nextSlide, 3000)
  
        return function() {
            if(timeoutCel.currentSlide) {
                clearTimeout(timeoutCel.currentSlide)
            }
        }
    },[currentSlide, lengthCel])
  
    if(!Array.isArray(ResCelebrationsImg) || ResCelebrationsImg.length <= 0) {
        return null
    }

  return (
    <div className="restaurant-celebrations">
        <img src={branchLeftImg} alt="Dekorativna slika" className='rc-branch1-img parallax' data-speedx="0.015" data-speedy="0.014" data-speedz="0.01" data-rotation="0.02" />
        <img src={branchRightImg} alt="Dekorativna slika" className='rc-branch2-img parallax' data-speedx="0.009" data-speedy="0.01" data-speedz="0" data-rotation="0" />
        <img src={LeavesLeft} alt="Dekorativna slika" className='rc-leaves-img' />
        <div className="restaurant-celebrations-content">
            <div className="rcc-column">
                <h1>Proslave u našem restoranu</h1>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            </div>
            <div className="rcc-column">
                <div className="rcc-slider">
                    {
                        ResCelebrationsImg.map((celebrations, index) => (
                            <div className="rcc-slider-content" key={index}>
                                {
                                    index === currentSlide && (
                                        <div className="rcc-slider-card">
                                            <img src={celebrations.image} alt="" />
                                        </div>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default RestaurantCelebrations
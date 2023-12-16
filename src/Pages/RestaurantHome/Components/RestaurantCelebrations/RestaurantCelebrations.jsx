import React, { useEffect, useRef, useState } from 'react'
import './restaurant-celebrations.css'
import LeavesLeft from '../../../../Assets/Restaurant/leavesImg.png'
import TreeLeft from '../../../../Assets/Restaurant/TreeLeft.png'
import restaurantImg1 from '../../../../Assets/Restaurant/restaurantImg4.jpg'
import restaurantImg2 from '../../../../Assets/Restaurant/restaurantImg7.jpg'
import restaurantImg3 from '../../../../Assets/Restaurant/restaurantImg12.jpg'
import restaurantImg4 from '../../../../Assets/Restaurant/restaurantImg27.jpg'
import restaurantImg5 from '../../../../Assets/Restaurant/restaurantImg40.jpg'

const ResCelebrationsImg = [
    {
        id: 1,
        image: restaurantImg1
    },
    {
        id: 2,
        image: restaurantImg2
    },
    {
        id: 3,
        image: restaurantImg3
    },
    {
        id: 4,
        image: restaurantImg4
    },
    {
        id: 5,
        image: restaurantImg5
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
            })
            timeoutCel.currentSlide = setTimeout(nextSlide, 6000)
        }
  
        timeoutCel.currentSlide = setTimeout(nextSlide, 6000)
  
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
        <img src={TreeLeft} alt="Dekorativna slika" className='rc-tree-left parallax fade-in' data-speedx="0.009" data-speedy="0.01" data-speedz="0" data-rotation="0" />
        <img src={LeavesLeft} alt="Dekorativna slika" className='rc-leaves-img' />
        <div className="restaurant-celebrations-content">
            <div className="rcc-column">
                <h1 className='slide-in from-left'>Proslave u našem restoranu</h1>
                <h3 className='slide-in from-left'>U restoranu Košuta svaka mala proslava postaje posebna, obasjana toplinom našeg gostoprimstva i ukusa koji će oduševiti sva nepca. Bez obzira na to radi li se o rođendanu, proslavi godišnjice, obiteljskom okupljanju ili prijateljskom sastanku, naš restoran pruža savršeno okruženje za nezaboravne trenutke. Bez obzira na veličinu vaše proslave, naš cilj je osigurati da svaki trenutak bude poseban i da se stvaraju uspomene koje će trajati celi život.</h3>
            </div>
            <div className="rcc-column">
                <div className="rcc-slider slide-in from-right">
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
import React from 'react'
import './restaurant-about-hero.css'
import tree1 from '../../../../Assets/Hall/forestTree4.png'
import tree2 from '../../../../Assets/Hall/forestTree3.png'
import tree3 from '../../../../Assets/Hall/forestTree2.png'
import meal1 from '../../../../Assets/Restaurant/restaurantMeal3.png'
import meal2 from '../../../../Assets/Restaurant/restaurantMeal4.png'
import { Link as ScrollLink } from 'react-scroll'

const RestaurantAboutHero = () => {
  return (
    <div className="restaurant-about-hero">
        <img src={tree1} alt="Dekorativna slika" className='rah-tree1 parallax' data-speedx="0.01" data-speedy="0.015" data-speedz="0" data-rotation="0" />
        <div className="rah-tree1-overlay"></div>
        <img src={tree2} alt="Dekorativna slika" className='rah-tree2 parallax' data-speedx="0.038" data-speedy="0.032" data-speedz="0.14" data-rotation="0.08" />
        <img src={tree3} alt="Dekorativna slika" className='rah-tree3 parallax' data-speedx="0.018" data-speedy="0.002" data-speedz="0.24" data-rotation="0.05" />
        <img src={tree3} alt="Dekorativna slika" className='rah-tree4 parallax' data-speedx="0.048" data-speedy="0.036" data-speedz="0.1" data-rotation="0.04" />
        <img src={meal1} alt="Dekorativna slika" className='rah-meal1 parallax' data-speedx="0.009" data-speedy="0.006" data-speedz="0" data-rotation="0" />
        <img src={meal2} alt="Dekorativna slika" className='rah-meal2 parallax' data-speedx="0.012" data-speedy="0.009" data-speedz="0.1" data-rotation="0.04" />
        <div className="rah-tree3-overlay"></div>
        <div className="rah-radial-overlay"></div>
        <div className="rah-bottom-overlay"></div>
        <div className="rah-top-overlay"></div>
        <div className="rah-content">
            <div className="rah-wrap">
                <h1>O našem restoranu</h1>
                <h3 className="rah-h3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                <div className="rah-read">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <ScrollLink smooth={true} duration={500} to='igralište'><h3>Pročitajte više</h3></ScrollLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RestaurantAboutHero
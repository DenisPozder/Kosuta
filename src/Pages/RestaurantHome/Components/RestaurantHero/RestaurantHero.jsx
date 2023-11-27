import React from 'react'
import './restaurant-hero.css'
import igraliste from '../../../../Assets/Igraliste.mp4'
import restaurantTree from '../../../../Assets/Landing/restaurantTree.png'
import restaurantTree2 from '../../../../Assets/Hall/forestTree2.png'
import { Link } from 'react-router-dom'

const RestaurantHero = () => {

  return (
    <div className="restaurant-hero">
      <div className="rh-bird-container">
        <div className="rh-bird"></div>
      </div>

      <div className="rh-bird-container2">
        <div className="rh-bird2"></div>
      </div>

      <div className="rh-bird-container3">
        <div className="rh-bird3"></div>
      </div>
      <div className="rh-wrap">
        <video src={igraliste} loop muted autoPlay></video>
        <div className="rhw-overlay"></div>
        <div className="rhw-top">4</div>
        <img src={restaurantTree} alt="Dekorativna slika" className='rhw-tree1-img parallax fade-in' data-speedx="0.01" data-speedy="0.02" data-speedz="0.02" data-rotation="0" />
        <img src={restaurantTree2} alt="Dekorativna slika" className='rhw-tree2-img parallax fade-in' data-speedx="0.007" data-speedy="0.07" data-speedz="0.04" data-rotation="0.1" />
        <div className="rhw-tree2-overlay"></div>
        <div className="rhw-content">
          <div className="rhwc-text">
            <div className="rhwct-items">
              <h1>Dobrodošli u restoran Košuta</h1>
              <h3 className='rhcwt-h3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
              <Link to='/restoran/jelovnik'><h3>Pogledajte još</h3></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantHero
import React from 'react'
import './restaurant-menu.css'
import { Link } from 'react-router-dom'
import leavesLeft from '../../../../Assets/Restaurant/leavesImg.png'
import TreeRight from '../../../../Assets/Restaurant/TreeRight.png'
import RMSlider from './RMSlider/RMSlider'

const RestaurantMenu = () => {
  return (
    <div className="restaurant-menu">
      <img src={leavesLeft} alt="Dekorativna slika" className='rm-leaves-img fade-in' />
      <img src={TreeRight} alt="Dekorativna slika" className='rm-tree-right parallax fade-in' data-speedx="0.009" data-speedy="0.01" data-speedz="0" data-rotation="0" />
        <div className="rm-content">
            <div className="rmc-column slide-in from-left">
              <RMSlider />
            </div>
            <div className="rmc-column">
                <h1 className='slide-in from-top'>Jelovnik</h1>
                <h3 className='rmc-h3 slide-in from-right'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                <Link className='slide-in from-bottom' to='/restoran/jelovnik'><h3>Pogledajte još</h3></Link>
            </div>
        </div>
    </div>
  )
}

export default RestaurantMenu
import React from 'react'
import './restaurant-menu.css'
import tree1 from '../../../../Assets/Hall/forestTree4.png'
import tree2 from '../../../../Assets/Hall/forestTree2.png'
import { Link } from 'react-router-dom'
import restaurantMeal from '../../../../Assets/Restaurant/restaurantMeal2.png'
import branchLeftLeaves from '../../../../Assets/Restaurant/branchLeft.png'

const RestaurantMenu = () => {
  return (
    <div className="restaurant-menu">
        <img src={branchLeftLeaves} alt="Dekorativna slika" className='rm-branch-left parallax' data-speedx="0.018" data-speedy="0.014" data-speedz="0.05" data-rotation="0.02" />
        <div className="rm-content">
            <div className="rmc-column">
                <img src={tree1} alt="Dekorativna slika" className='rmc-tree1 parallax' data-speedx="0.03" data-speedy="0.024" data-speedz="0.05" data-rotation="0.02" />
                <img src={restaurantMeal} alt="Dekorativna slika" className='rmc-meal parallax' data-speedx="0.015" data-speedy="0.014" data-speedz="0.01" data-rotation="0.02" />
                <img src={tree2} alt="Dekorativna slika" className='rmc-tree2 parallax' data-speedx="0.035" data-speedy="0.024" data-speedz="0.03" data-rotation="0.06" />
            </div>
            <div className="rmc-column">
                <h1>Jelovnik</h1>
                <h3 className='rmc-h3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                <Link to='/restoran/jelovnik'><h3>Pogledajte još</h3></Link>
            </div>
        </div>
    </div>
  )
}

export default RestaurantMenu
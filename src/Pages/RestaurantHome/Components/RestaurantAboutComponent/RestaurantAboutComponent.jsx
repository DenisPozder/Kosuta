import React from 'react'
import './restaurant-about-component.css'
import { Link } from 'react-router-dom'
import tree1 from '../../../../Assets/Hall/forestTree1.png'
import tree2 from '../../../../Assets/Hall/forestTree2.png'
import tree3 from '../../../../Assets/Hall/forestTree3.png'
import restaurantMeal from '../../../../Assets/Restaurant/restaurantMeal.png'
import branchRightLeave from '../../../../Assets/Restaurant/branchRight.png'

const RestaurantAboutComponent = () => {
  return (
    <div className="restaurant-about-component">
      <img src={branchRightLeave} alt="Dekorativna slika" className='rac-branch-right parallax'  data-speedx="0.018" data-speedy="0.014" data-speedz="0.05" data-rotation="0.02" />
        <div className="rac-content">
            <div className="rac-column">
                <h1>O nama</h1>
                <h3 className='racc-h3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                <Link to='/restoran/o-nama'><h3>Pogledajte još</h3></Link>
            </div>
            <div className="rac-column">
                <img src={tree1} alt="Dekorativna slika" className='racc-tree1 parallax' data-speedx="0.03" data-speedy="0.024" data-speedz="0.05" data-rotation="0.02" />
                <img src={tree3} alt="Dekorativna slika" className='racc-tree2 parallax' data-speedx="0.015" data-speedy="0.014" data-speedz="0.01" data-rotation="0.02" />
                <img src={tree2} alt="Dekorativna slika" className='racc-tree3 parallax' data-speedx="0.009" data-speedy="0.01" data-speedz="0" data-rotation="0" />
                <img src={restaurantMeal} alt="Dekorativna slika" className='racc-meal parallax' data-speedx="0.035" data-speedy="0.024" data-speedz="0.03" data-rotation="0.06" />
            </div>
        </div>
    </div>
  )
}

export default RestaurantAboutComponent
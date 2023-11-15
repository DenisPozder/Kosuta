import React from 'react'
import './restaurant-gameroom.css'
import gameroom from '../../../../Assets/Hall/gameroom.jpg'
import tree1 from '../../../../Assets/Hall/forestTree1.png'
import tree2 from '../../../../Assets/Hall/forestTree2.png'
import tree3 from '../../../../Assets/Hall/forestTree3.png'
import { Link } from 'react-router-dom'

const RestaurantGameroom = () => {
  return (
    <div className="restaurant-gameroom">
        <div className="rg-radial-overlay"></div>
        <div className="rg-top-overlay"></div>
        <div className="rg-bottom-overlay"></div>
        <img src={tree1} alt="Dekorativna slika" className='rg-tree1 parallax' data-speedx="0.015" data-speedy="0.014" data-speedz="0.01" data-rotation="0.02" />
        <img src={tree3} alt="Dekorativna slika" className='rg-tree3 parallax' data-speedx="0.009" data-speedy="0.01" data-speedz="0" data-rotation="0" />
        <img src={tree2} alt="Dekorativna slika" className='rg-tree2 parallax' data-speedx="0.03" data-speedy="0.024" data-speedz="0.05" data-rotation="0.02" />
        <div className="rg-tree1-overlay"></div>
        <div className="rg-tree3-overlay"></div>
        <div className="rg-content">
            <img src={gameroom} alt="Slika Igrališta" />
            <div className="rgc-wrap">
                <div className="rgcw-content">
                    <h1>Igraonica</h1>
                    <h3 className='rgcw-h3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                    <Link to='/restoran/igraonica'><h3>Pogledajte još</h3></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RestaurantGameroom
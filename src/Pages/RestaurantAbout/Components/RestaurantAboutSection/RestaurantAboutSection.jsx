import React from 'react'
import './restaurant-about-section.css'
import restaurantimage from '../../../../Assets/Restaurant/restaurantImage.jpg'
import tree1 from '../../../../Assets/Hall/forestTree1.png'
import tree2 from '../../../../Assets/Hall/forestTree2.png'
import tree3 from '../../../../Assets/Hall/forestTree3.png'
import tree4 from '../../../../Assets/Hall/forestTree4.png'

const RestaurantAboutSection = () => {
  return (
    <div className="restaurant-about-section">
        <div className="ras-content">
            <div className="ras-column">
                <div className="ras-radial-overlay"></div>
                <div className="ras-top-overlay"></div>
                <div className="ras-bottom-overlay"></div>
                <img src={tree1} alt="Dekorativna slika" className='ras-tree1 parallax' data-speedx="0.008" data-speedy="0.01" data-speedz="0" data-rotation="0" />
                <div className="ras-tree1-overlay"></div>
                <img src={tree2} alt="Dekorativna slika" className='ras-tree2 parallax' data-speedx="0.048" data-speedy="0.036" data-speedz="0.1" data-rotation="0.04" />
                <div className="ras-tree2-overlay"></div>
                <img src={tree3} alt="Dekorativna slika" className='ras-tree3 parallax' data-speedx="0.028" data-speedy="0.016" data-speedz="0" data-rotation="0.01" />
                <div className="ras-tree3-overlay"></div>
                <img src={tree4} alt="Dekorativna slika" className='ras-tree4 parallax' data-speedx="0.018" data-speedy="0.006" data-speedz="0" data-rotation="0.009" />
                <div className="ras-tree4-overlay"></div>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            </div>
            <div className="ras-column">
                <img src={restaurantimage} alt="Slika restorana" className='ras-img' />
            </div>
        </div>
    </div>
  )
}

export default RestaurantAboutSection
import React from 'react'
import './big-hall-component.css'
import hall1Img from '../../../../Assets/Hall/hall1.jpg'
import forestTree1 from '../../../../Assets/Hall/forestTree2.png'
import forestTree2 from '../../../../Assets/Hall/forestTree4.png'

const BigHallComponent = () => {
  return (
    <div className="big-hall-component">
      <img src={forestTree1} alt="Dekorativna slika" className='bhc-tree1-img parallax' data-speedx="0.01" data-speedy="0.015" data-speedz="0.01" data-rotation="0.01" />
      <img src={forestTree2} alt="Dekorativna slika" className='bhc-tree2-img parallax' data-speedx="0.03" data-speedy="0.036" data-speedz="0.06" data-rotation="0.06" />
      <div className="bhc-content">
        <div className="bhc-column">
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
        </div>
        <div className="bhc-column">
          <img src={hall1Img} alt="Slika velike sale" />
        </div>
      </div>
    </div>
  )
}

export default BigHallComponent
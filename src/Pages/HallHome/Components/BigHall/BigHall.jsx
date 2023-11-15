import React from 'react'
import './big-hall.css'
import topLeaves from '../../../../Assets/Hall/topLeaves.png'
import forestTree1 from '../../../../Assets/Hall/forestTree2.png'
import hallTable from '../../../../Assets/Landing/hallTable.png'
import curtainLeft from '../../../../Assets/Hall/curtainLeft.png'
import curtainRight from '../../../../Assets/Hall/curtainRight.png'
import hall1Img from '../../../../Assets/Hall/hall1.jpg'
import { Link } from 'react-router-dom'

const BigHall = () => {
  return (
    <div className="big-hall">
        <img className='bh-top-leaves parallax' data-speedx="0.01" data-speedy="0.01" data-speedz="0" data-rotation="0" src={topLeaves} alt="Dekorativna slika" />
        <img className='bh-forest-tree parallax' data-speedx="0.04" data-speedy="0.04" data-speedz="0.03" data-rotation="0.03" src={forestTree1} alt="Dekorativna slika" />
        <div className="bh-forest-tree-overlay"></div>
        <div className="bh-leaves-overlay"></div>
        <img src={curtainLeft} alt="Dekorativna slika" className='bh-curtain-left parallax' data-speedx="0.035" data-speedy="0.024" data-speedz="0.032" data-rotation="0.018" />
        <img src={curtainRight} alt="Dekorativna slika" className='bh-curtain-right parallax' data-speedx="0.035" data-speedy="0.024" data-speedz="0.032" data-rotation="0.018" />
        <img className='bh-hall-table parallax' data-speedx="0.07" data-speedy="0.07" data-speedz="0.06" data-rotation="0.06" src={hallTable} alt="Dekorativna slika" />
        <div className="bh-content">
          <img src={hall1Img} alt="Slika velike sale" />
          <div className="bh-content-wrap">
            <div className="bh-content-inner">
              <h1>Velika Sala</h1>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
              <Link to="/proslave/velika-sala"><h3>Pogledajte još</h3></Link>
            </div>
          </div>
        </div>
        <div className="bh-main-overlay"></div>
        <div className="bh-main-bottom-overlay"></div>
    </div>
  )
}

export default BigHall
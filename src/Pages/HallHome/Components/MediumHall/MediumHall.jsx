import React from 'react'
import './medium-hall.css'
import tree1 from '../../../../Assets/Hall/tree1.png'
import tree2 from '../../../../Assets/Hall/tree2.png'
import tree3 from '../../../../Assets/Hall/tree3.png'
import hall2Img from '../../../../Assets/Hall/hall2.jpg'
import { Link } from 'react-router-dom'
import decorationHall from '../../../../Assets/Hall/decorationHall.png'
import curtainLeft from '../../../../Assets/Hall/curtainLeft.png'
import curtainRight from '../../../../Assets/Hall/curtainRight.png'

const MediumHall = () => {
  return (
    <div className="medium-hall">
        <div className="medium-hall-overlay-bottom"></div>
        <div className="medium-hall-overlay-top"></div>
        <img className='mh-tree1 parallax' data-speedx="0.01" data-speedy="0.01" data-speedz="0.06" data-rotation="0.06" src={tree1} alt="Dekorativna slika" />
        <div className="mh-tree1-overlay"></div>
        <img className='mh-tree2 parallax' data-speedx="0.03" data-speedy="0.03" data-speedz="0" data-rotation="0" src={tree2} alt="Dekorativna slika" />
        <div className="mh-tree2-overlay"></div>
        <img className='mh-tree3 parallax' data-speedx="0.08" data-speedy="0.08" data-speedz="0.5" data-rotation="0.5" src={tree3} alt="Dekorativna slika" />
        <img src={curtainLeft} alt="Dekorativna slika" className='mh-curtain-left parallax' data-speedx="0.035" data-speedy="0.024" data-speedz="0.032" data-rotation="0.018" />
        <img src={curtainRight} alt="Dekorativna slika" className='mh-curtain-right parallax' data-speedx="0.035" data-speedy="0.024" data-speedz="0.032" data-rotation="0.018" />
        <img src={decorationHall} alt="Dekorativna slika" className='mh-decoration' />
        <div className="mh-content">
            <img src={hall2Img} alt="Slika srednje sale" />
            <div className="mh-content-wrap">
            <div className="mh-content-inner">
              <h1>Srednja Sala</h1>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
              <Link to="/proslave/srednja-sala"><h3>Pogledajte još</h3></Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MediumHall
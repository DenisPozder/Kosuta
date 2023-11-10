import React from 'react'
import './hall-home-about.css'
import HallImg from '../../../../Assets/Hall/hall1.jpg'
import { Link } from 'react-router-dom'
import forestTree1 from '../../../../Assets/Hall/forestTree2.png'

const HallHomeAbout = () => {
  return (
    <div className="hall-home-about">
      <img className='hhb-tree parallax' src={forestTree1} alt="Dekorativna slika" />
        <div className="hhb-content">
            <div className="hhb-column">
                <h1>Kratko o nama</h1>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                <Link to="/proslave/o-nama">Pogledajte još</Link>
            </div>
            <div className="hhb-column">
                <img src={HallImg} alt="Slika sale" />
            </div>
        </div>
    </div>
  )
}

export default HallHomeAbout
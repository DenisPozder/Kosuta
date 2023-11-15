import React from 'react'
import './small-hall.css'
import hall3Img from '../../../../Assets/Hall/hall3.jpg'
import { Link } from 'react-router-dom'
import curtainLeft from '../../../../Assets/Hall/curtainLeft.png'
import curtainRight from '../../../../Assets/Hall/curtainRight.png'
import smallHallTable from '../../../../Assets/Hall/hallTable2.png'

const SmallHall = () => {
  return (
    <div className="small-hall">
      <img src={curtainLeft} alt="Dekorativna slika" className='sh-curtain-left parallax' data-speedx="0.035" data-speedy="0.024" data-speedz="0.032" data-rotation="0.018" />
      <img src={curtainRight} alt="Dekorativna slika" className='sh-curtain-right parallax' data-speedx="0.035" data-speedy="0.024" data-speedz="0.032" data-rotation="0.018" />
      <img src={smallHallTable} alt="Dekorativna slika" className='sh-table parallax' data-speedx="0.07" data-speedy="0.07" data-speedz="0.06" data-rotation="0.06" />
        <div className="sh-content">
            <img src={hall3Img} alt="Slika male sale" />
            <div className="sh-content-wrap">
                <div className="sh-content-inner">
                    <h1>Mala Sala</h1>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                    <Link to="/proslave/mala-sala"><h3>Pogledajte još</h3></Link>
                </div>
            </div>
        </div>
        <div className="sh-overlay"></div>
        <div className="sh-main-overlay"></div>
        <div className="sh-main-bottom-overlay"></div>
    </div>
  )
}

export default SmallHall
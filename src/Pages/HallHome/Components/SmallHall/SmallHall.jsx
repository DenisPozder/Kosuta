import React from 'react'
import './small-hall.css'
import hall3Img from '../../../../Assets/Hall/hall3.jpg'
import tree1 from '../../../../Assets/Hall/forestTree1.png'
import tree2 from '../../../../Assets/Hall/forestTree2.png'
import tree3 from '../../../../Assets/Hall/forestTree3.png'
import bushes from '../../../../Assets/Hall/bushes.png'
import { Link } from 'react-router-dom'

const SmallHall = () => {
  return (
    <div className="small-hall">
        <img src={tree1} alt="Dekorativna slika" className='sh-tree1-img parallax' data-speedx="0.01" data-speedy="0.014" data-speedz="0.06" data-rotation="0.08" />
        <div className="sh-tree1-overlay"></div>
        <img src={tree2} alt="Dekorativna slika" className='sh-tree2-img parallax' data-speedx="0.025" data-speedy="0.02" data-speedz="0.09" data-rotation="0.1" />
        <div className="sh-tree2-overlay"></div>
        <img src={tree3} alt="Dekorativna slika" className='sh-tree3-img parallax' data-speedx="0.036" data-speedy="0.04" data-speedz="0.1" data-rotation="0.2" />
        <img src={bushes} alt="Dekorativna slika" className='sh-bushes-img parallax' data-speedx="0.018" data-speedy="0.02" data-speedz="0" data-rotation="0" />
        <div className="sh-tree3-overlay"></div>
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
        <div className="sh-main-overlay"></div>
        <div className="sh-main-bottom-overlay"></div>
    </div>
  )
}

export default SmallHall
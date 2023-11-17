import React from 'react'
import './gameroom-component.css'
import GameroomImg from '../../../../Assets/Hall/gameroom.jpg'
import tree1 from '../../../../Assets/Hall/forestTree3.png'
import tree2 from '../../../../Assets/Hall/forestTree2.png'

const GameroomComponent = () => {
  return (
    <div className="gameroom-component">
        <img src={tree1} alt="Dekorativna slika" className='grc-tree1 parallax' data-speedx="0.018" data-speedy="0.023" data-speedz="0.02" data-rotation="0.05" />
        <img src={tree2} alt="Dekorativna slika" className='grc-tree2 parallax' data-speedx="0.009" data-speedy="0.005" data-speedz="0" data-rotation="0" />
        <div className="grc-content">
            <div className="grc-column">
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            </div>
            <div className="grc-column">
                <img src={GameroomImg} alt="Slika igraonice" />
            </div>
        </div>
    </div>
  )
}

export default GameroomComponent
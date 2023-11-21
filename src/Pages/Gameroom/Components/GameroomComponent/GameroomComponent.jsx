import React from 'react'
import './gameroom-component.css'
import GameroomImg from '../../../../Assets/Hall/gameroom.jpg'

const GameroomComponent = () => {
  return (
    <div className="gameroom-component">
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
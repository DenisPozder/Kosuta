import React from 'react'
import './hall-gameroom.css'
import GameroomImg from '../../../../Assets/Hall/gameroom.jpg'
import { Link } from 'react-router-dom'

const HallGameroom = () => {
  return (
    <div className="hall-gameroom">
        <div className="hg-content">
            <div className="hg-column">
                <img src={GameroomImg} alt="Slika igrališta" />
            </div>
            <div className="hg-column">
                <h1>Igralište</h1>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                <Link to="/proslave/igralište">Pogledajte još</Link>
            </div>
        </div>
    </div>
  )
}

export default HallGameroom
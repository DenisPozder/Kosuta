import React from 'react'
import './gameroom-component.css'
import GameroomImg from '../../../../Assets/Hall/gameroom.jpg'

const GameroomComponent = () => {
  return (
    <div className="gameroom-component">
        <div className="grc-content">
            <div className="grc-column slide-in from-left">
                <h3>Dobrodošli u </h3>
            </div>
            <div className="grc-column slide-in from-right">
                <img src={GameroomImg} alt="Slika igraonice" />
            </div>
        </div>
    </div>
  )
}

export default GameroomComponent
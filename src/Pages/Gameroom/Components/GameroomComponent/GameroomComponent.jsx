import React from 'react'
import './gameroom-component.css'
import GameroomImg from '../../../../Assets/Hall/gameroom.jpg'

const GameroomComponent = () => {
  return (
    <div className="gameroom-component">
        <div className="grc-content">
            <div className="grc-column slide-in from-left">
                <h3>Dobrodošli u naše posebno igralište koje je stvoreno sa ciljem da pruži deci nezaboravo iskustvo zabave, učenja i smeha. Smešteno unutar našeg restorana, ovo igralište je dizajnirano kako bi pružilo siguran i stimulativan prostor gde se mališani mogu slobodno izražavati i istraživati.</h3>
            </div>
            <div className="grc-column slide-in from-right">
                <img src={GameroomImg} alt="Slika igraonice" />
            </div>
        </div>
    </div>
  )
}

export default GameroomComponent
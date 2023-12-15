import React from 'react'
import './hall-layout-right.css'
import parking from '../../../../Assets/Hall/parking.jpg'

const HallLayoutRight = () => {
  return (
    <div className="hall-layout-right">
        <div className="hlr-content">
            <div className="hlr-column slide-in from-left">
                <h1><span>parking</span><span>za goste</span></h1>
                <p>Udahnut u ambijent restorana, parking se besprekorno spaja sa funkcionalnošću i estetikom. Okružen zelenilom i blagim osvetljenjem, ima jednostavan pristup za goste restorana.</p>
            </div>
            <div className="hlr-column slide-in from-right">
                <img src={parking} alt="Slika našeg parkinga" />
            </div>
        </div>
    </div>
  )
}

export default HallLayoutRight
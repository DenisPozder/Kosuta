import React from 'react'
import './hrp-component.css'
import kosutnjakSuma from '../../../../Assets/Hall/kosutnjakSuma.jpg'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const HRPComponent = () => {
  return (
    <div className="hrp-component">
        <LazyLoadImage src={kosutnjakSuma} alt="Slika šume" />
        <div className="hrp-wrap">
            <div className="hrp-content">
                <h1 className='hrp-title'><span className='hrp-span1'>rezervišite</span><span className='hrp-span2'>vaš datum</span></h1>
                <p className='hrp-desc'>Da biste rezervisali neku od naših sala, potrebno je da pozovete sledeći broj telefona i proverite da li je željena sala dostupna za željeni datum. Ukoliko jeste, rezervišite je što pre i osigurajte besprekornu proslavu!</p>
                <Link className='hrp-btn' to={'tel:+381 64 012 345'}><h3>telefon: <span>+381 64 012 345</span></h3></Link>
            </div>
        </div>
    </div>
  )
}

export default HRPComponent
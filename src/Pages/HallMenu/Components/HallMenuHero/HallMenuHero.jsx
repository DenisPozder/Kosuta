import React from 'react'
import './hall-menu-hero.css'
import menuImg from '../../../../Assets/Restaurant/restaurantMenu.jpg'

const HallMenuHero = () => {
  return (
    <div className="hall-menu-hero">
        <img src={menuImg} alt="Slika šume" />
        <div className="hmh-overlay"></div>
        <div className="hmh-wrap">
            <div className="hmh-content">
                <h1 className='hmh-title'><span className='hmh-span1'>odaberite vaš</span><span className='hmh-span2'>poseban meni</span></h1>
                <p className='hmh-desc'>Uživajte u raznovrsnim ukusima našeg menija koji vas vodi kroz paletu jedinstvenih jela. Od primamljivih zalogaja do obroka ispunjenih raznolikim ukusima, svako jelo predstavlja spoj inspirativnih sastojaka.</p>
                <div className='hmh-btn'><h3>meniji su prilagodljivi</h3></div>
            </div>
        </div>
    </div>
  )
}

export default HallMenuHero
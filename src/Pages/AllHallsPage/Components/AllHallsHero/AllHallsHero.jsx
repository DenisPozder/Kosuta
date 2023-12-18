import React from 'react'
import HallImg from '../../../../Assets/Restaurant/restaurantImg4.jpg'
import { Link } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";
import './all-halls-hero.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const AllHallsHero = () => {
  return (
    <div className="all-halls-hero">
        <LazyLoadImage src={HallImg} alt="Slika sale" />
        <div className="ahh-wrap">
            <div className="ahh-content">
                <h1 className='ahh-title'><span className='ahh-span1'>sve sale</span><span className='ahh-span2'>za proslave</span></h1>
                <p className='ahh-desc'>Pogledajte sve naše sale, i odaberite pravu salu za vaš poseban dan. Na raspolaganju su vam sale sa kapacitetom od 80 do 400 gostiju, sa prilagodljivim menijima, sve u zavisnosti od vaših potreba.</p>
                <Link className='ahh-btn' to={'/rezervacije'}><h3>rezerviši salu</h3><FaChevronRight /></Link>
            </div>
        </div>
    </div>
  )
}

export default AllHallsHero
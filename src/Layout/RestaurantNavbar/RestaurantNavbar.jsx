import React, { useEffect, useState } from 'react'
import './restaurant-navbar.css'
import kosutaLogo from '../../Assets/kosutaLogo.png'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'

const restaurantNavbarLinks = [
  {
    title: "Početna",
    link: "/restoran/početna",
    engTitle: "Home"
  },
  {
    title: "O nama",
    link: "/restoran/o-nama",
    engTitle: "About Us"
  },
  {
    title: "Igraonica",
    link: '/restoran/igraonica',
    engTitle: "Playroom"
  },
  {
    title: "Jelovnik i pića",
    link: "/restoran/jelovnik",
    engTitle: "Menu and drinks"
  },
  {
    title: "Galerija",
    link: "/restoran/galerija",
    engTitle: "Gallery"
  },
]

const RestaurantNavbar = () => {

  const { t, i18n } = useTranslation('restaurantHeader')

  const location = useLocation()
  const isRelativePage = [
    "/restoran/igraonica",
    "/restoran/galerija"
  ].includes(location.pathname)

  // Toggle Navbar
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible)
  }

  const closeMenu = () => {
    setMenuVisible(false)
  }

  /*----- Change background on scroll -----*/
  const [back, setBack] = useState(false)
  const backgroundColor = () => {
      if(window.scrollY > 0) {
          setBack(true)
      }else {
          setBack(false)
      }
  }
      
  useEffect(() => {
      window.addEventListener('scroll', backgroundColor)
      
      return () => {
          window.removeEventListener('scroll', backgroundColor)
      }
  },[])

  return (
    <div className={`restaurant-navbar ${back ? "background" : ""} ${isRelativePage ? "restaurant-relative" : ""}`}>
      <div className="rn-content">
        <Link to='/restoran/početna' className="rn-logo">
          <img src={kosutaLogo} alt="Kosuta Logo" />
        </Link>
        <div className={`rn-links ${menuVisible ? 'active' : ''}`}>
          <div className='rn-close'>
            <button onClick={closeMenu}><AiOutlineClose /></button>
          </div>
          {
            restaurantNavbarLinks.map((restaurantLink, index) => (
              <NavLink to={restaurantLink.link} key={index}>{i18n.language === 'sr' ? restaurantLink.title : restaurantLink.engTitle}</NavLink>
            ))
          }
        </div>
        <div className="rn-btn-content">
          <Link to='#' className='rn-contact'>{t('rhBtn')}</Link>
          <button className='rn-menu' onClick={toggleMenu}><BiMenuAltRight /></button>
        </div>
      </div>
    </div>
  )
}

export default RestaurantNavbar
import React, { useEffect, useState } from 'react'
import './restaurant-navbar.css'
import kosutaLogo from '../../Assets/kosutaLogo.png'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

const restaurantNavbarLinks = [
  {
    title: "Početna",
    link: "/restoran/početna"
  },
  {
    title: "O nama",
    link: "/restoran/o-nama"
  },
  {
    title: "Igraonica",
    link: '/restoran/igraonica'
  },
  {
    title: "Jelovnik i pića",
    link: "/restoran/jelovnik"
  },
  {
    title: "Galerija",
    link: "/restoran/galerija"
  },
]

const RestaurantNavbar = () => {

  const location = useLocation()
  console.log(location.pathname)

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

  return location.pathname === '/restoran/po%C4%8Detna' ? (
    <div className={`restaurant-navbar ${back ? "background" : ""}`}>
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
              <NavLink to={restaurantLink.link} key={index}>{restaurantLink.title}</NavLink>
            ))
          }
        </div>
        <div className="rn-btn-content">
          <Link to='#' className='rn-contact'>Kontaktirajte nas</Link>
          <button className='rn-menu' onClick={toggleMenu}><BiMenuAltRight /></button>
        </div>
      </div>
    </div>
  ) : (
  <div className="restaurant-relative">
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
            <NavLink to={restaurantLink.link} key={index}>{restaurantLink.title}</NavLink>
          ))
        }
      </div>
      <div className="rn-btn-content">
        <Link to='#' className='rn-contact'>Kontaktirajte nas</Link>
        <button className='rn-menu' onClick={toggleMenu}><BiMenuAltRight /></button>
      </div>
    </div>
  </div>
  )
}

export default RestaurantNavbar
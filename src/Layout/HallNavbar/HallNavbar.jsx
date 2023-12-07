import React, { useEffect, useState } from 'react'
import './hall-navbar.css'
import { Link, NavLink } from 'react-router-dom'
import kosutaLogo from '../../Assets/kosutaLogo.png'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";

const HallNavbarLinks = [
    {
        title: 'rezervacije',
        link: "/početna"
    },
    {
        title: 'sve sale',
        link: "/sale"
    },
    {
        title: 'meni',
        link: "/meni"
    },
    {
        title: 'kontakt',
        link: "/kontakt"
    },
    {
        title: 'o nama',
        link: "/o-nama"
    },
    {
        title: 'galerija',
        link: "/galerija"
    },
]

const HallNavbar = () => {

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
    <div className={`hall-navbar ${back ? "background" : ""}`}>
        <div className="hall-navbar-content">
            <Link to={'/početna'} className='hnc-logo'>
                <img src={kosutaLogo} alt="Košuta logo" />
            </Link>
            <div className={`hnc-links ${menuVisible ? "toggle" : ""}`}>
                <button className="hnc-close" onClick={closeMenu}>
                    <IoIosCloseCircleOutline />
                </button>
                {
                    HallNavbarLinks.map((link, index) => (
                        <NavLink to={link.link} key={index}>{link.title}</NavLink>
                    ))
                }
            </div>
            <button className='hnc-menu-toggle' onClick={toggleMenu}>
                <CiMenuBurger />
            </button>
        </div>
    </div>
  )
}

export default HallNavbar
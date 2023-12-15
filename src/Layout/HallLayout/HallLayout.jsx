import React from 'react'
import HallNavbar from '../HallNavbar/HallNavbar'
import HallFooter from '../HallFooter/HallFooter'
import { IoFastFood } from "react-icons/io5";
import './hall-layout.css'
import { Link } from 'react-router-dom';

const HallLayout = ({children}) => {
  return (
    <div>
        <HallNavbar />
        {children}
        <HallFooter />
        <Link to='/restoran/početna' className="hl-restaurant">
          <IoFastFood />
          <p>Restoran</p>
        </Link>
    </div>
  )
}

export default HallLayout
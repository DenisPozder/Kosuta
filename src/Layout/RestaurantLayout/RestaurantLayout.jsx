import React, { useEffect, useState } from 'react'
import RestaurantNavbar from '../RestaurantNavbar/RestaurantNavbar'
import RestaurantFooter from '../RestaurantFooter/RestaurantFooter'
import './restaurant-layout.css'
import { Link } from 'react-router-dom'
import { GiPartyFlags } from "react-icons/gi";

const RestaurantLayout = ({ children }) => {
  return (
    <div>
        <RestaurantNavbar />
        {children}
        <RestaurantFooter />
        <Link to='/početna' className="rl-celebrations">
          <GiPartyFlags />
          <p>Proslave</p>
        </Link>
    </div>
  )
}

export default RestaurantLayout
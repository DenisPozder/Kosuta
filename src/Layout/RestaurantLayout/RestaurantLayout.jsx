import React, { useEffect, useState } from 'react'
import RestaurantNavbar from '../RestaurantNavbar/RestaurantNavbar'
import RestaurantFooter from '../RestaurantFooter/RestaurantFooter'
import './restaurant-layout.css'
import { Link } from 'react-router-dom'
import { GiPartyFlags } from "react-icons/gi";
import { useTranslation } from 'react-i18next'

const RestaurantLayout = ({ children }) => {

  const { i18n } = useTranslation('')

  return (
    <div>
        <RestaurantNavbar />
        {children}
        <RestaurantFooter />
        <Link to='/početna' className="rl-celebrations">
          <GiPartyFlags />
          <p>{i18n.language === 'sr' ? 'Proslave' : 'Celebrations'}</p>
        </Link>
    </div>
  )
}

export default RestaurantLayout
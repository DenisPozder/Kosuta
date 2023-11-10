import React from 'react'
import RestaurantNavbar from '../RestaurantNavbar/RestaurantNavbar'
import RestaurantFooter from '../RestaurantFooter/RestaurantFooter'

const RestaurantLayout = ({ children }) => {
  return (
    <div>
        <RestaurantNavbar />
        {children}
        <RestaurantFooter />
    </div>
  )
}

export default RestaurantLayout
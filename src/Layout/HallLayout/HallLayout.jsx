import React from 'react'
import HallNavbar from '../HallNavbar/HallNavbar'
import HallFooter from '../HallFooter/HallFooter'

const HallLayout = ({children}) => {
  return (
    <div>
        <HallNavbar />
        {children}
        <HallFooter />
    </div>
  )
}

export default HallLayout
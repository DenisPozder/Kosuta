import React from 'react'
import LandingHall from '../LandingHall/LandingHall'
import LandingRestaurant from '../LandingRestaurant/LandingRestaurant'
import './landing-component.css'

const LandingComponent = () => {
  return (
    <div className="landing-component">
        <LandingRestaurant />
        <LandingHall />
    </div>
  )
}

export default LandingComponent
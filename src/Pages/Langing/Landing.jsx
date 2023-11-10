import React from 'react'
import LandingComponent from './Components/LandingComponent/LandingComponent'
import SeasonalAnimation from '../../Components/SeasonalAnimation/SeasonalAnimation'

const Landing = () => {

  const currentDate = new Date()
  
  return (
    <section className="page-section">
      <SeasonalAnimation currentDate={currentDate} />
      <LandingComponent />
    </section>
  )
}

export default Landing
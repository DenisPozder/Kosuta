import React from 'react'
import LandingComponent from './Components/LandingComponent/LandingComponent'
import LanguageSwitcher from '../../Components/LanguageSwitcher/LanguageSwitcher'

const Landing = () => {
  return (
    <section className="page-section">
      <LanguageSwitcher />
      <LandingComponent />
    </section>
  )
}

export default Landing
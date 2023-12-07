import React from 'react'
import HallLayout from '../../Layout/HallLayout/HallLayout'
import HallMenuHero from './Components/HallMenuHero/HallMenuHero'
import HallMenuComponent from './Components/HallMenuHeader/HallMenuComponent'

const HallMenu = () => {
  return (
    <HallLayout>
        <section className="page-section">
          <HallMenuHero />
          <HallMenuComponent />
        </section>
    </HallLayout>
  )
}

export default HallMenu
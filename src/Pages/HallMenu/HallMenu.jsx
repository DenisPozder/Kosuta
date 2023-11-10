import React from 'react'
import HallLayout from '../../Layout/HallLayout/HallLayout'
import HallMenuComponent from './Components/HallMenuComponent/HallMenuComponent'

const HallMenu = () => {
  return (
    <HallLayout>
        <section className="page-section">
            <HallMenuComponent />
        </section>
    </HallLayout>
  )
}

export default HallMenu
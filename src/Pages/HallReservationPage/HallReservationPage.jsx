import React from 'react'
import HallLayout from '../../Layout/HallLayout/HallLayout'
import HRPComponent from './Components/HRPComponent/HRPComponent'

const HallReservationPage = () => {
  return (
    <HallLayout>
        <section className="page-section">
            <HRPComponent />
        </section>
    </HallLayout>
  )
}

export default HallReservationPage
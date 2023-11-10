import React from 'react'
import HallLayout from '../../Layout/HallLayout/HallLayout'
import BigHallComponent from './Components/BigHallComponent/BigHallComponent'

const BigHallPage = () => {
  return (
    <HallLayout>
        <section className="page-section">
            <BigHallComponent />
        </section>
    </HallLayout>
  )
}

export default BigHallPage
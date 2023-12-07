import React from 'react'
import HallLayout from '../../Layout/HallLayout/HallLayout'
import AllHallsHero from './Component/AllHallsHero/AllHallsHero'
import AllHallsTabs from './Component/AllHallsTabs/AllHallsTabs'

const AllHallsPage = () => {
  return (
    <HallLayout>
        <section className="page-section">
            <AllHallsHero />
            <AllHallsTabs />
        </section>
    </HallLayout>
  )
}

export default AllHallsPage
import React from 'react'
import HallLayout from '../../Layout/HallLayout/HallLayout'
import AllHallsHero from './Components/AllHallsHero/AllHallsHero'
import AllHallsTabs from './Components/AllHallsTabs/AllHallsTabs'

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
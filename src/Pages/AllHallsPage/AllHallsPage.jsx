import React from 'react'
import HallLayout from '../../Layout/HallLayout/HallLayout'
import AllHallsHero from './Components/AllHallsHero/AllHallsHero'
import AllHallsTabs from './Components/AllHallsTabs/AllHallsTabs'
import SampleSlider from './Components/SampleSlider/SampleSlider'

const AllHallsPage = () => {
  return (
    <HallLayout>
        <section className="page-section">
            <AllHallsHero />
            <AllHallsTabs />
            <SampleSlider />
        </section>
    </HallLayout>
  )
}

export default AllHallsPage
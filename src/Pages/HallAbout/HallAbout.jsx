import React from 'react'
import HallLayout from '../../Layout/HallLayout/HallLayout'
import HallAboutHero from './Components/HallAboutHero/HallAboutHero'
import HallAboutLocation from './Components/HallAboutLocation/HallAboutLocation'
import HallLayoutRight from './Components/HallAboutLayoutRight/HallLayoutRight'
import HallLayoutLeft from './Components/HallAboutLayoutLeft/HallLayoutLeft'

const HallAbout = () => {
  return (
    <HallLayout>
        <section className='page-section'>
          <HallAboutHero />
          <HallAboutLocation />
          <HallLayoutRight />
          <HallLayoutLeft />
        </section>
    </HallLayout>
  )
}

export default HallAbout
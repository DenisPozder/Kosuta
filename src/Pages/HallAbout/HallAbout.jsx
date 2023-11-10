import React from 'react'
import HallLayout from '../../Layout/HallLayout/HallLayout'
import HallAboutHero from './Components/HallAboutHero/HallAboutHero'
import HallLayoutLeft from './Components/HallLayoutLeft/HallLayoutLeft'

const HallAbout = () => {
  return (
    <HallLayout>
        <section className='page-section'>
          <HallAboutHero />
          <HallLayoutLeft />
        </section>
    </HallLayout>
  )
}

export default HallAbout
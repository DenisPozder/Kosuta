import React, { useEffect } from 'react'
import HallLayout from '../../Layout/HallLayout/HallLayout'
import HallAboutHero from './Components/HallAboutHero/HallAboutHero'
import HallAboutLocation from './Components/HallAboutLocation/HallAboutLocation'
import HallLayoutRight from './Components/HallAboutLayoutRight/HallLayoutRight'
import HallLayoutLeft from './Components/HallAboutLayoutLeft/HallLayoutLeft'

const HallAbout = () => {

        /*----- Intersection Observer -----*/
useEffect(() => {

  const faders = document.querySelectorAll('.fade-in')
  const sliders = document.querySelectorAll('.slide-in')

  const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
  }

  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return;
      }else {
        entry.target.classList.add('appear')
        appearOnScroll.unobserve(entry.target)
      }
    })
  }, appearOptions)

  faders.forEach(fader => {
    appearOnScroll.observe(fader)
  })

  sliders.forEach(slider => {
    appearOnScroll.observe(slider)
  })

},[])

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
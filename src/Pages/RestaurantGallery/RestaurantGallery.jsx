import React, { useEffect } from 'react'
import RestaurantLayout from '../../Layout/RestaurantLayout/RestaurantLayout'
import RGComponent from './Components/RGComponent/RGComponent'

const RestaurantGallery = () => {

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
    <>
    <RestaurantLayout>
        <section className="page-section">
          <RGComponent />
        </section>
    </RestaurantLayout>
    </>
  )
}

export default RestaurantGallery
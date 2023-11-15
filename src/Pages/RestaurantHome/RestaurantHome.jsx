import React, { useEffect } from 'react'
import RestaurantLayout from '../../Layout/RestaurantLayout/RestaurantLayout'
import RestaurantHero from './Components/RestaurantHero/RestaurantHero'
import RestaurantAboutComponent from './Components/RestaurantAboutComponent/RestaurantAboutComponent'
import RestaurantMenu from './Components/RestaurantMenu/RestaurantMenu'
import RestaurantGameroom from './Components/RestaurantGameroom/RestaurantGameroom'

const RestaurantHome = () => {

  useEffect(() => {
    const parallax_el = document.querySelectorAll('.parallax')
    let xValue = 0,
        yValue = 0

    let rotateDegree = 0

    function update (cursorPosition) {
        parallax_el.forEach((el) => {
            let speedx = el.dataset.speedx
            let speedy = el.dataset.speedy
            let speedz = el.dataset.speedz
            let rotation = el.dataset.rotation

            let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1
            let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1

            el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px))
            translateY(calc(-50% + ${yValue * speedy}px))
            rotateY(${rotateDegree * rotation}deg)
            perspective(2300px)
            translateZ(${zValue * speedz}px)`
        })
    }

    update(0)

    window.addEventListener('mousemove', (e) => {
        xValue = e.clientX - window.innerWidth / 2
        yValue = e.clientY - window.innerHeight / 2

        rotateDegree = (xValue / (window.innerWidth / 2)) * 20

        update(e.clientX)
    })
},[])

  return (
    <>
    <RestaurantLayout>
      <section className='page-section'>
        <RestaurantHero />
        <RestaurantAboutComponent />
        <RestaurantGameroom />
        <RestaurantMenu />
      </section>
    </RestaurantLayout>
    </>
  )
}

export default RestaurantHome
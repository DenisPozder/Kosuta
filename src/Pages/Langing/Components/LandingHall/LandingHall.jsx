import React, { useEffect } from 'react'
import './landing-hall.css'
import { Link } from 'react-router-dom'
import hallTable from '../../../../Assets/Landing/hallTable.png'

const LandingHall = () => {

  useEffect(() => {
    const landingHall = document.querySelector('.landing-hall')
    const parallax_ele = document.querySelectorAll('.parallax-hall')
    let xValueh = 0,
        yValueh = 0

    let rotateDegreeh = 0

    function updateHall (cursorPosition) {
        parallax_ele.forEach((el) => {
            let speedxh = el.dataset.speedx
            let speedyh = el.dataset.speedy
            let speedzh = el.dataset.speedz
            let rotationh = el.dataset.rotation

            let isInLefth = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1
            let zValueh = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLefth * 0.1

            el.style.transform = `translateX(calc(-50% + ${-xValueh * speedxh}px))
            translateY(calc(-50% + ${yValueh * speedyh}px))
            rotateY(${rotateDegreeh * rotationh}deg)
            perspective(2300px)
            translateZ(${zValueh * speedzh}px)`
        })
    }

    updateHall(0)

    landingHall.addEventListener('mousemove', (e) => {
        xValueh = e.clientX - window.innerWidth / 2
        yValueh = e.clientY - window.innerHeight / 2

        rotateDegreeh = (xValueh / (window.innerWidth / 2)) * 20

        updateHall(e.clientX)
    })
  },[])

  return (
    <Link to="/proslave/početna" className="landing-hall">
      <div className="lh-table parallax-hall" data-speedx="0.009" data-speedy="0.09" data-speedz="0.50" data-rotation="0.2">
        <img src={hallTable} alt="Dekorativna slika" />
      </div>
      <h1 className='lh-text parallax-hall' data-speedx="0.05" data-speedy="0.05" data-speedz="0" data-rotation="0">Košuta <span>Proslave</span></h1>
      <div className="vignette"></div>
    </Link>
  )
}

export default LandingHall
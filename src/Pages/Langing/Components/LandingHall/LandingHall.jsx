import React, { useEffect } from 'react'
import './landing-hall.css'
import { Link } from 'react-router-dom'
import hallTable from '../../../../Assets/Landing/hallTable.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useTranslation } from 'react-i18next'
import hallImg from '../../../../Assets/Hall/kamin13.jpg'

const LandingHall = () => {

  const { i18n } = useTranslation('')

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
    <Link to="/početna" className="landing-hall">
      <img className='lh-main-img' src={hallImg} alt="Slika sala" />
      <div className="lh-main-overlay"></div>
      <div className="lh-table parallax-hall" data-speedx="0.009" data-speedy="0.09" data-speedz="0.50" data-rotation="0.2">
        <img src={hallTable} alt="Dekorativna slika" />
      </div>
      <h1 className='lh-text parallax-hall' data-speedx="0.05" data-speedy="0.05" data-speedz="0" data-rotation="0">Košuta <span>{i18n.language === 'sr' ? 'Proslave' : 'Celebrations'}</span></h1>
      <div className='lh-button-content'>
        <Link className='lh-button' to={'/početna'}><h3>{i18n.language === 'sr' ? 'posetite sale' : 'visit halls'}</h3></Link>
      </div>
      <div className="vignette"></div>
      <div className="lp-top-overlay"></div>
      <div className="lp-bottom-overlay"></div>
    </Link>
  )
}

export default LandingHall
import React, { useEffect } from 'react'
import './landing-restaurant.css'
import { Link } from 'react-router-dom'
import restaurantLeaves from '../../../../Assets/Landing/topLeaves.png'
import restaurantTable from '../../../../Assets/Landing/restaurantTable.png'
import animalImg from '../../../../Assets/Landing/animal.png'
import plants from '../../../../Assets/Landing/plants.png'
import restaurantTree from '../../../../Assets/Landing/restaurantTree.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const LandingRestaurant = () => {

    useEffect(() => {
        const landingRestaurant = document.querySelector('.landing-restaurant')
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

        landingRestaurant.addEventListener('mousemove', (e) => {
            xValue = e.clientX - window.innerWidth / 2
            yValue = e.clientY - window.innerHeight / 2

            rotateDegree = (xValue / (window.innerWidth / 2)) * 20

            update(e.clientX)
        })
    },[])

  return (
    <Link to='/restoran/početna' className="landing-restaurant">
        <div className="vignette"></div>
        <div className="lp-top-overlay"></div>
        <div className="lp-bottom-overlay"></div>
        <div className="lr-leaves parallax" data-speedx="0.10" data-speedy="0.10" data-speedz="0" data-rotation="0">
            <LazyLoadImage src={restaurantLeaves} alt="Dekorativna slika" />
        </div>
        <div className="lr-table parallax" data-speedx="0.05" data-speedy="0.05" data-speedz="0.70" data-rotation="0">
            <LazyLoadImage src={restaurantTable} alt="Dekorativna slika" />
        </div>
        <h1 className='lr-text parallax' data-speedx="0.05" data-speedy="0.05" data-speedz="0" data-rotation="0">Košuta <span>Restoran</span></h1>
        <div className='lr-button-content'>
            <Link className='lr-button' to={'/restoran/početna'}><h3>Posetite restoran</h3></Link>
        </div>
        <div className="lr-animal parallax" data-speedx="0.03" data-speedy="0.03" data-speedz="0.80" data-rotation="0.18">
            <LazyLoadImage src={animalImg} alt="Dekorativna slika" />
        </div>
        <div className='lr-plants parallax' data-speedx="0.009" data-speedy="0.09" data-speedz="0.50" data-rotation="0.2">
            <img src={plants} alt="Dekorativna slika" />
        </div>
        <div className="lr-tree parallax" data-speedx="0.007" data-speedy="0.07" data-speedz="0.40" data-rotation="0.1">
            <LazyLoadImage src={restaurantTree} alt="Dekorativna slika" />
        </div>
    </Link>
  )
}

export default LandingRestaurant
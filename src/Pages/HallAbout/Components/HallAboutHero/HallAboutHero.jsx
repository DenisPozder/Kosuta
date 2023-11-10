import React, { useEffect } from 'react'
import './hall-about-hero.css'
import mainTree from '../../../../Assets/Hall/tree1.png'
import backTree1 from '../../../../Assets/Hall/tree2.png'
import backTree2 from '../../../../Assets/Hall/tree3.png'

const HallAboutHero = () => {

    useEffect(() => {
        const hallAbout = document.querySelector('.hall-about-hero')
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

        hallAbout.addEventListener('mousemove', (e) => {
            xValue = e.clientX - window.innerWidth / 2
            yValue = e.clientY - window.innerHeight / 2

            rotateDegree = (xValue / (window.innerWidth / 2)) * 20

            update(e.clientX)
        })
    },[])

  return (
    <div className="hall-about-hero">
        <div className="hah-main-tree parallax" data-speedx="0.06" data-speedy="0.06" data-speedz="0" data-rotation="0">
            <img src={mainTree} alt="Dekorativna slika" />
        </div>
        <div className="hah-first-overlay"></div>
        <div className="hah-back-tree1 parallax" data-speedx="0.02" data-speedy="0.02" data-speedz="0.70" data-rotation="0">
            <img src={backTree1} alt="Dekorativna slika" />
        </div>
        <div className="hah-back-tree2 parallax" data-speedx="0.02" data-speedy="0.02" data-speedz="0.80" data-rotation="0.2">
            <img src={backTree2} alt="Dekorativna slika" />
        </div>
        <div className="hah-second-overlay"></div>
        <div className="hah-back-tree3 parallax" data-speedx="0.01" data-speedy="0.01" data-speedz="0.50" data-rotation="0.2">
            <img src={backTree2} alt="Dekorativna slika" />
        </div>
        <div className="hah-back-tree4 parallax" data-speedx="0.01" data-speedy="0.01" data-speedz="0.40" data-rotation="0.15">
            <img src={backTree1} alt="Dekorativna slika" />
        </div>
        <div className="hah-main-overlay"></div>
        <div className="hah-main-overlay2"></div>
        <div className="hah-content">
            <div className="hah-text parallax" data-speedx="0.01" data-speedy="0.01" data-speedz="0" data-rotation="0">
                <h1>Sale za sve vrste proslava</h1>
                <h3>Dobrodošli u restoran "Košuta," gde vaša proslava postaje nezaboravna stvarnost. Sa ponosom se posvećujemo stvaranju savršenih trenutaka za naše goste već godinama. Naša posvećena ekipa razume koliko je važno da svaka proslava bude jedinstvena i posebna. Zato smo osmislili prelepe i funkcionalne sale koje će ispuniti sva vaša očekivanja.</h3>
            </div>
        </div>
    </div>
  )
}

export default HallAboutHero
import React, { useEffect } from 'react'
import HallLayout from '../../Layout/HallLayout/HallLayout'
import HallHero from './Components/HallHero/HallHero'
import HallSliderTextLayout from '../../Components/HallSliderTextLayout/HallSliderTextLayout'
import hall1 from '../../Assets/Hall/hall1.jpg'
import HallCards from './Components/HallCards/HallCards'
import HallText from './Components/HallText/HallText'

const HallData = [
  {
    title1: "Sala",
    title2: "Grande",
    desc: "Sala 'Grande' pruža elegantan prostor koji sa svojim raskošnim enterijerom ukrašenim toplim tonovima i prirodnim dekoracijama, dvorana stvara gostoljubivu atmosferu za različita prilike, od venčanja do korporativnik okupljanja.",
    images: [
      {
        image: hall1
      },
      {
        image: hall1
      },
      {
        image: hall1
      },
      {
        image: hall1
      },
      {
        image: hall1
      },
      {
        image: hall1
      },
      {
        image: hall1
      },
    ],
    layout: 'left',
    capacity: "200 - 400",
    autoplayDuration: 8000,
    link: "/rezervacije"
  },
  {
    title1: "Svečana",
    title2: "Sala",
    desc: "Svečana sala pruža ugodan prostor koji se svojim raskošnim enterijerom i pripodnim dekoracijama pruža prikladno okruženje za sve vrste okupljanja sa ograničenim brojem gostiju.",
    images: [
      {
        image: hall1
      },
      {
        image: hall1
      },
      {
        image: hall1
      },
      {
        image: hall1
      },
      {
        image: hall1
      },
      {
        image: hall1
      },
      {
        image: hall1
      },
    ],
    layout: 'right',
    capacity: "100 - 170",
    autoplayDuration: 6000,
    link: "/rezervacije"
  },
  {
    title1: "Kamin",
    title2: "Sala",
    desc: "Sala 'Grande' pruža elegantan prostor koji sa svojim raskošnim enterijerom ukrašenim toplim tonovima i prirodnim dekoracijama, dvorana stvara gostoljubivu atmosferu za različita prilike, od venčanja do korporativnik okupljanja.",
    images: [
      {
        image: hall1
      },
      {
        image: hall1
      },
      {
        image: hall1
      },
      {
        image: hall1
      },
      {
        image: hall1
      },
      {
        image: hall1
      },
      {
        image: hall1
      },
    ],
    layout: 'left',
    capacity: "80",
    autoplayDuration: 8000,
    link: "/rezervacije"
  },
]

const HallHome = () => {

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
    <HallLayout>
      <section className='page-section'>
        <HallHero />
        {
          HallData.map((hall, index) => (
            <HallSliderTextLayout key={index} {...hall} />
          ))
        }
        <HallText />
        <HallCards />
      </section>
    </HallLayout>
  )
}

export default HallHome
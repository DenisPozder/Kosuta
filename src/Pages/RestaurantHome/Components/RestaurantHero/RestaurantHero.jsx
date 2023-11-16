import React, { useEffect, useState } from 'react'
import './restaurant-hero.css'
import restaurantTree from '../../../../Assets/Landing/restaurantTree.png'
import kosuta from '../../../../Assets/Landing/animal.png'
import forestTree1 from '../../../../Assets/Hall/forestTree1.png'
import forestTree2 from '../../../../Assets/Hall/forestTree2.png'
import forestTree3 from '../../../../Assets/Hall/forestTree3.png'
import forestTree4 from '../../../../Assets/Hall/forestTree4.png'
import treeOnTheGround from '../../../../Assets/Restaurant/treeOnTheGround.png'
import HeroMenuImg from '../../../../Assets/Restaurant/HeroMenuImg.png'
import HeroAboutUsImg from '../../../../Assets/Restaurant/HeroAboutUs.png'
import HeroGameroomImg from '../../../../Assets/Restaurant/HeroGameroomImg.png'
import { Link } from 'react-router-dom'

const HeroItems = [
  {
    title: "Dobrodošli u restoran Košuta",
    image: HeroMenuImg,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "/restoran/jelovnik"
  },
  {
    title: "O našem restoranu",
    image: HeroAboutUsImg,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "/restoran/o-nama"
  },
  {
    title: "O našem igralištu",
    image: HeroGameroomImg,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "/restoran/igralište"
  },
]

const RestaurantHero = () => {

  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval;

    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 8000);
    }

    return () => clearInterval(interval);
  }, [currentSlide, autoplay]);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? HeroItems.length - 1 : prevSlide - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === HeroItems.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="restaurant-hero">
      <img src={treeOnTheGround} alt="Dekorativna slika" className='rh-tree-ground parallax' data-speedx="0.06" data-speedy="0.055" data-speedz="0.09" data-rotation="0.09" />
      <img src={restaurantTree} alt="Dekorativna slika" className='rh-tree-img parallax' data-speedx="0.035" data-speedy="0.025" data-speedz="0.056" data-rotation="0.048" />
      <img src={kosuta} alt="Dekorativna slika" className='rh-animal parallax' data-speedx="0.035" data-speedy="0.025" data-speedz="0.056" data-rotation="0.048" />
      <img src={forestTree2} alt="Dekorativna slika" className='rh-right-tree parallax' data-speedx="0.009" data-speedy="0.010" data-speedz="0.026" data-rotation="0.018" />
      <div className="rhrt-overlay"></div>
      <img src={forestTree1} alt="Dekorativna slika" className='rh-forest-tree1 parallax' data-speedx="0.005" data-speedy="0.006" data-speedz="0" data-rotation="0" />
      <div className="rhft1-overlay"></div>
      <img src={forestTree2} alt="Dekorativna slika" className='rh-forest-tree2 parallax' data-speedx="0.014" data-speedy="0.016" data-speedz="0.016" data-rotation="0.028" />
      <div className="rhft2-overlay"></div>
      <img src={forestTree2} alt="Dekorativna slika" className='rh-forest-tree5 parallax' data-speedx="0.007" data-speedy="0.009" data-speedz="0" data-rotation="0" />
      <img src={forestTree3} alt="Dekorativna slika" className='rh-forest-tree3 parallax' data-speedx="0.0018" data-speedy="0.01" data-speedz="0.2" data-rotation="0.25" />
      <img src={forestTree4} alt="Dekorativna slika" className='rh-forest-tree4 parallax' data-speedx="0.029" data-speedy="0.045" data-speedz="0.23" data-rotation="0.34" />
      <div className="rhft3-overlay"></div>
      <div className="forest-trees-overlay"></div>
      <div className="forest-main-overlay"></div>
      <div className="forest-circle-gradient"></div>
      <div className="forest-bottom-overlay"></div>
      <div className="restaurant-hero-content">
        <div className="rh-wrap">
          <div className="rh-inner" onMouseEnter={() => setAutoplay(false)} onMouseLeave={() => setAutoplay(true)}>
            <div className="rh-inner-container" style={{ transform: `translateX(${-currentSlide * 100}%)`}}>
              {
                HeroItems.map((slide, index) => (
                <div className="rh-card" key={index}>
                  <div className="rh-text">
                    <h1>{slide.title}</h1>
                    <h3 className='rh-text-h3'>{slide.desc}</h3>
                    <Link to={slide.link}><h3>Pogledajte još</h3></Link>
                  </div>
                </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantHero
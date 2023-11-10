import React from 'react'
import './hall-hero.css'
import MainHallVideo from '../../../../Assets/Hall/mainHallVideo.mp4'
import forestTree2 from '../../../../Assets/Hall/forestTree2.png'
import forestTree3 from '../../../../Assets/Hall/forestTree3.png'
import bushes from '../../../../Assets/Hall/bushes.png'

const HallHero = () => {
  return (
    <div className='hall-hero'>
      <div className="hh-video">
        <video src={MainHallVideo} muted loop autoPlay></video>
      </div>
      <div className="hall-hero-overlay"></div>
      <img className='hh-forest-tree1 parallax' data-speedx="0.03" data-speedy="0.03" data-speedz="0.06" data-rotation="0.06" src={forestTree2} alt="Dekorativna slika" />
      <div className="hhft-overlay1"></div>
      <img className='hh-forest-tree2 parallax' data-speedx="0.01" data-speedy="0.01" data-speedz="0" data-rotation="0" src={forestTree3} alt="Dekorativna slika" />
      <div className="hhft-overlay2"></div>
      <img className='hh-forest-bushes parallax' data-speedx="0.05" data-speedy="0.05" data-speedz="0.09" data-rotation="0.09" src={bushes} alt="Dekorativna slika" />
      <div className="hh-main-overlay"></div>
      <div className="hall-hero-content">
        <div className="hall-hero-content-grid"></div>
      </div>
    </div>
  )
}

export default HallHero
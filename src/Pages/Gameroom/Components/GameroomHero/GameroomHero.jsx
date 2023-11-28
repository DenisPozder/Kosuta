import React from 'react'
import './gameroom-hero.css'
import video from '../../../../Assets/Igraliste.mp4'
import gamerommImg from '../../../../Assets/gameroomImg.png'

const GameroomHero = () => {
  return (
    <div className="gameroom-hero">
      <img src={gamerommImg} alt="Dekorativna slika" className='gh-img parallax' />
      <div className="gh-main-overlay"></div>
        <video src={video} muted loop autoPlay playsInline></video>
        <div className="gh-content">
            <div className="ghc-text">
                <h1>Igraonica</h1>
                <h3>Naše igralište za decu je savršeno mesto za mališane da se igraju i istraže svet kroz igru dok roditelji uživaju u ukusnim obrocima i posebnim trenucima. Naš prostor je uređen sa pažnjom prema sigurnosti i udobnosti dece, pružajući im bezbrižno okruženje.</h3>
            </div>
        </div>
    </div>
  )
}

export default GameroomHero
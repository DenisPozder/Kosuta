import React from 'react'
import './gameroom-hero.css'
import video from '../../../../Assets/Igraliste.mp4'
import gamerommImg from '../../../../Assets/gameroomImg.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useTranslation } from 'react-i18next'

const GameroomHero = () => {

  const { t } = useTranslation('gameroom')

  return (
    <div className="gameroom-hero">
      <LazyLoadImage src={gamerommImg} alt="Dekorativna slika" className='gh-img parallax' />
      <div className="gh-main-overlay"></div>
        <video src={video} muted loop autoPlay playsInline></video>
        <div className="gh-content">
            <div className="ghc-text">
                <h1>{t('gTitle')}</h1>
                <h3>{t('gDesc')}</h3>
            </div>
        </div>
    </div>
  )
}

export default GameroomHero
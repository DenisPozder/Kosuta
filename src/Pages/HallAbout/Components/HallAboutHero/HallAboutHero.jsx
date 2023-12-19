import React from 'react'
import './hall-about-hero.css'
import aboutUsImg from '../../../../Assets/Restaurant/restaurantGarden13.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useTranslation } from 'react-i18next'

const HallAboutHero = () => {

  const { t } = useTranslation('about')

  return (
    <div className="hall-about-hero">
        <LazyLoadImage src={aboutUsImg} alt="O nama pozadina" />
        <div className="hah-wrap">
            <div className="hah-content">
                <h1 className='hah-title'><span className='hah-span1'>{t('ahTitle1')}</span><span className='hah-span2'>{t('ahTitle2')}</span></h1>
                <p className='hah-desc1'>{t('ahDesc1')}</p>
                <p className='hah-desc2'>{t('ahDesc2')}</p>
                <div className='hah-btn'>{t('ahBtn')}</div>
            </div>
        </div>
    </div>
  )
}

export default HallAboutHero
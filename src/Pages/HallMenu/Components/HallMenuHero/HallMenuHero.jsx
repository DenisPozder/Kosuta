import React from 'react'
import './hall-menu-hero.css'
import menuImg from '../../../../Assets/Restaurant/restaurantMenu.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useTranslation } from 'react-i18next'

const HallMenuHero = () => {

  const { t } = useTranslation('hallMenu')
  return (
    <div className="hall-menu-hero">
        <LazyLoadImage src={menuImg} alt="Slika šume" />
        <div className="hmh-overlay"></div>
        <div className="hmh-wrap">
            <div className="hmh-content">
                <h1 className='hmh-title'><span className='hmh-span1'>{t("hmhTitle1")}</span><span className='hmh-span2'>{t("hmhTitle2")}</span></h1>
                <p className='hmh-desc'>{t("hmhDesc")}</p>
                <div className='hmh-btn'><h3>{t("hmhBtn")}</h3></div>
            </div>
        </div>
    </div>
  )
}

export default HallMenuHero
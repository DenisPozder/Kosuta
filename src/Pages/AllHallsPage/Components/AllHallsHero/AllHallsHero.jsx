import React from 'react'
import HallImg from '../../../../Assets/Hall/kamin4.jpg'
import { Link } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";
import './all-halls-hero.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useTranslation } from 'react-i18next';

const AllHallsHero = () => {

  const { t } = useTranslation('allHalls')

  return (
    <div className="all-halls-hero">
        <LazyLoadImage src={HallImg} alt="Slika sale" />
        <div className="ahh-wrap">
            <div className="ahh-content">
                <h1 className='ahh-title'><span className='ahh-span1'>{t('ahhTitle1')}</span><span className='ahh-span2'>{t('ahhTitle2')}</span></h1>
                <p className='ahh-desc'>{t('ahhDesc')}</p>
                <Link className='ahh-btn' to={'/rezervacije'}><h3>{t('ahhBtn')}</h3><FaChevronRight /></Link>
            </div>
        </div>
    </div>
  )
}

export default AllHallsHero
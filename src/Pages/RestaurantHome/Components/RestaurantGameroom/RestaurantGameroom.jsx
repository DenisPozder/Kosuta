import React from 'react'
import './restaurant-gameroom.css'
import gameroom from '../../../../Assets/Hall/gameroom.jpg'
import tree1 from '../../../../Assets/Hall/forestTree1.png'
import tree2 from '../../../../Assets/Hall/forestTree2.png'
import tree3 from '../../../../Assets/Hall/forestTree3.png'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useTranslation } from 'react-i18next'

const RestaurantGameroom = () => {

  const { t } = useTranslation('restaurantHome')

  return (
    <div className="restaurant-gameroom">
        <div className="rg-radial-overlay"></div>
        <div className="rg-top-overlay"></div>
        <div className="rg-bottom-overlay"></div>
        <img src={tree2} alt="Dekorativna slika" className='rg-tree2 parallax fade-in' data-speedx="0.03" data-speedy="0.024" data-speedz="0.05" data-rotation="0.02" />
        <div className="rg-tree1-overlay"></div>
        <div className="rg-tree3-overlay"></div>
        <div className="rg-content">
            <LazyLoadImage src={gameroom} alt="Slika Igrališta" />
            <div className="rgc-wrap">
                <div className="rgcw-content">
                    <h1 className='slide-in from-top'>{t('rgTitle')}</h1>
                    <h3 className='rgcw-h3 fade-in'>{t('rgDesc')}</h3>
                    <Link className='slide-in from-bottom' to='/restoran/igraonica'><h3>{t('rgBtn')}</h3></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RestaurantGameroom
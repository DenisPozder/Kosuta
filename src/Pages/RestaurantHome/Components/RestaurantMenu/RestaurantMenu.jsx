import React, { useEffect, useRef, useState } from 'react'
import './restaurant-menu.css'
import { Link } from 'react-router-dom'
import leavesLeft from '../../../../Assets/Restaurant/leavesImg.png'
import TreeRight from '../../../../Assets/Restaurant/TreeRight.png'
import RMSlider from './RMSlider/RMSlider'
import crackInTheWall from '../../../../Assets/crackInTheWall.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const RestaurantMenu = () => {
  return (
    <div className="restaurant-menu">
      <LazyLoadImage src={leavesLeft} alt="Dekorativna slika" className='rm-leaves-img fade-in' />
      <LazyLoadImage src={TreeRight} alt="Dekorativna slika" className='rm-tree-right parallax fade-in' data-speedx="0.009" data-speedy="0.01" data-speedz="0" data-rotation="0" />
        <div className="rm-content">
            <div className="rmc-column slide-in from-left">
              <RMSlider />
            </div>
            <div className="rmc-column">
                <h1 className='slide-in from-top'>Jelovnik</h1>
                <h3 className='rmc-h3 slide-in from-right'>Jelovnik u našem restoranu Košuta predstavlja harmoničan spoj tradicionalne kuhinje i modernih gastronomskih trendova. Sastoji se od pažljivo odabranih jela koja pružaju nezaboravno iskustvo ukusa. Naš jelovnik odražava posvećenost kvalitetnim sastojcima, lokalnim proizvodima i kreativnom pristupu pripremi hrane. Uživajte u bogatstvu aroma i tekstura koje nudi naša paleta predjela, osvežavajućih salata, sočnih glavnih jela, kao i ukusnih deserta.</h3>
                <Link className='slide-in from-bottom' to='/restoran/jelovnik'><h3>Pogledajte još</h3></Link>
            </div>
        </div>
    </div>
  )
}

export default RestaurantMenu
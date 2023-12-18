import React from 'react'
import './restaurant-gameroom.css'
import gameroom from '../../../../Assets/Hall/gameroom.jpg'
import tree1 from '../../../../Assets/Hall/forestTree1.png'
import tree2 from '../../../../Assets/Hall/forestTree2.png'
import tree3 from '../../../../Assets/Hall/forestTree3.png'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const RestaurantGameroom = () => {
  return (
    <div className="restaurant-gameroom">
        <div className="rg-radial-overlay"></div>
        <div className="rg-top-overlay"></div>
        <div className="rg-bottom-overlay"></div>
        <LazyLoadImage src={tree2} alt="Dekorativna slika" className='rg-tree2 parallax fade-in' data-speedx="0.03" data-speedy="0.024" data-speedz="0.05" data-rotation="0.02" />
        <div className="rg-tree1-overlay"></div>
        <div className="rg-tree3-overlay"></div>
        <div className="rg-content">
            <LazyLoadImage src={gameroom} alt="Slika Igrališta" />
            <div className="rgc-wrap">
                <div className="rgcw-content">
                    <h1 className='slide-in from-top'>Igraonica</h1>
                    <h3 className='rgcw-h3 fade-in'>Dečija igraonica u našem restoranu predstavlja čarobno carstvo zabave za najmlađe posetitelje. Sa svetlim bojama, veselim muralima i sigurnim igralištima, naša igraonica je dizajnirana kako bi pružila deci nezaboravno iskustvo igre i druženja. Sa mnoštvom interaktivnih igračaka, penjalica, tobogana i kreativnih kutaka, naše igralište poziva decu na istraživanje, učenje i smeh.</h3>
                    <Link className='slide-in from-bottom' to='/restoran/igraonica'><h3>Pogledajte još</h3></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RestaurantGameroom
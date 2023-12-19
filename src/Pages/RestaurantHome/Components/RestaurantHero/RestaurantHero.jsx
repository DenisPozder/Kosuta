import React from 'react'
import './restaurant-hero.css'
import igraliste from '../../../../Assets/Igraliste.mp4'
import restaurantTree from '../../../../Assets/Landing/restaurantTree.png'
import restaurantTree2 from '../../../../Assets/Hall/forestTree2.png'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import restaurantImg from '../../../../Assets/Restaurant/restaurantImage.jpg'

const RestaurantHero = () => {

  return (
    <div className="restaurant-hero">
      <div className="rh-bird-container">
        <div className="rh-bird"></div>
      </div>

      <div className="rh-bird-container2">
        <div className="rh-bird2"></div>
      </div>

      <div className="rh-bird-container3">
        <div className="rh-bird3"></div>
      </div>
      <div className="rh-wrap">
        <LazyLoadImage className='rhw-img' src={restaurantImg} alt='Slika restorana' />
        <div className="rhw-overlay"></div>
        <div className="rhw-top">4</div>
        <LazyLoadImage src={restaurantTree} alt="Dekorativna slika" className='rhw-tree1-img parallax' data-speedx="0.01" data-speedy="0.02" data-speedz="0.02" data-rotation="0" />
        <LazyLoadImage src={restaurantTree2} alt="Dekorativna slika" className='rhw-tree2-img parallax' data-speedx="0.007" data-speedy="0.07" data-speedz="0.04" data-rotation="0.1" />
        <div className="rhw-tree2-overlay"></div>
        <div className="rhw-content">
          <div className="rhwc-text">
            <div className="rhwct-items">
              <h1>Dobrodošli u restoran Košuta</h1>
              <h3 className='rhcwt-h3'>Restoran Košuta je idilično utočište gastronomskih užitaka smešteno u srcu prirode, gde se spojila elegancija i autentičnost. Sa prozračnim i prostranim interijerom, restoran odiše toplinom i ugodnom atmosferom, stvarajući savršeno okruenje za uživanje u vrhunskoj kulinarskoj ponudi.</h3>
              <Link to='/restoran/jelovnik'><h3>Pogledajte još</h3></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantHero
import React from 'react'
import './restaurant-hero.css'
import restaurantTree from '../../../../Assets/Landing/restaurantTree.png'
import kosuta from '../../../../Assets/Landing/animal.png'
import forestTree1 from '../../../../Assets/Hall/forestTree1.png'
import forestTree2 from '../../../../Assets/Hall/forestTree2.png'
import forestTree3 from '../../../../Assets/Hall/forestTree3.png'
import forestTree4 from '../../../../Assets/Hall/forestTree4.png'
import treeOnTheGround from '../../../../Assets/Restaurant/treeOnTheGround.png'

const RestaurantHero = () => {
  return (
    <div className="restaurant-hero">
      <img src={treeOnTheGround} alt="Dekorativna slika" className='rh-tree-ground parallax' data-speedx="0.06" data-speedy="0.055" data-speedz="0.09" data-rotation="0.09" />
      <img src={restaurantTree} alt="Dekorativna slika" className='rh-tree-img parallax' data-speedx="0.035" data-speedy="0.025" data-speedz="0.056" data-rotation="0.048" />
      <img src={kosuta} alt="Dekorativna slika" className='rh-animal parallax' data-speedx="0.035" data-speedy="0.025" data-speedz="0.056" data-rotation="0.048" />
      <img src={forestTree2} alt="Dekorativna slika" className='rh-right-tree parallax' data-speedx="0.009" data-speedy="0.010" data-speedz="0.026" data-rotation="0.018" />
      <div className="rhrt-overlay"></div>
      <img src={forestTree1} alt="Dekorativna slika" className='rh-forest-tree1 parallax' data-speedx="0.005" data-speedy="0.006" data-speedz="0" data-rotation="0" />
      <div className="rhft1-overlay"></div>
      <img src={forestTree2} alt="Dekorativna slika" className='rh-forest-tree2 parallax' data-speedx="0.014" data-speedy="0.016" data-speedz="0.016" data-rotation="0.028" />
      <div className="rhft2-overlay"></div>
      <img src={forestTree2} alt="Dekorativna slika" className='rh-forest-tree5 parallax' data-speedx="0.007" data-speedy="0.009" data-speedz="0" data-rotation="0" />
      <img src={forestTree3} alt="Dekorativna slika" className='rh-forest-tree3 parallax' data-speedx="0.0018" data-speedy="0.01" data-speedz="0.2" data-rotation="0.25" />
      <img src={forestTree4} alt="Dekorativna slika" className='rh-forest-tree4 parallax' data-speedx="0.029" data-speedy="0.045" data-speedz="0.23" data-rotation="0.34" />
      <div className="rhft3-overlay"></div>
      <div className="forest-trees-overlay"></div>
      <div className="forest-main-overlay"></div>
      <div className="forest-circle-gradient"></div>
      <div className="forest-bottom-overlay"></div>
      <div className="rh-content"></div>
    </div>
  )
}

export default RestaurantHero
import React from 'react'
import './restaurant-about-gameroom.css'
import gameroomImg from '../../../../Assets/Hall/gameroom.jpg'
import tree1 from '../../../../Assets/Hall/forestTree2.png'
import tree2 from '../../../../Assets/Hall/forestTree3.png'

const RestaurantAboutGameroom = () => {

  return (
    <div className="restaurant-about-gameroom" id='igralište'>
        <div className="rag-content">
            <div className="rag-column">
                <img src={gameroomImg} alt="Slika igrališta" className='rag-img' />
            </div>
            <div className="rag-column">
                <img src={tree1} alt="Dekorativna slika" className='rag-tree1 parallax' data-speedx="0.018" data-speedy="0.002" data-speedz="0" data-rotation="0" />
                <div className="rag-tree1-overlay"></div>
                <img src={tree2} alt="Dekorativna slika" className='rag-tree2 parallax' data-speedx="0.01" data-speedy="0.012" data-speedz="0" data-rotation="0" />
                <div className="rag-tree2-overlay"></div>
                <img src={tree1} alt="Dekorativna slika" className='rag-tree3 parallax' data-speedx="0.038" data-speedy="0.032" data-speedz="0.14" data-rotation="0.08" />
                <div className="rag-tree3-overlay"></div>
                <div className="rag-text-bottom-overlay"></div>
                <div className="rag-text-top-overlay"></div>
                <h1>Naše igralište za decu</h1>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            </div>
        </div>
    </div>
  )
}

export default RestaurantAboutGameroom
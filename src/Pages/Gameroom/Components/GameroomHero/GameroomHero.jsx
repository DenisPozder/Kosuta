import React from 'react'
import './gameroom-hero.css'
import video from '../../../../Assets/Igraliste.mp4'
import forestTree1 from '../../../../Assets/Hall/forestTree1.png'
import forestTree2 from '../../../../Assets/Hall/forestTree2.png'
import forestTree3 from '../../../../Assets/Hall/forestTree3.png'

const GameroomHero = () => {
  return (
    <div className="gameroom-hero">
        <video src={video} muted loop autoPlay></video>
        <img src={forestTree1} alt="Dekorativna slika" className='gh-tree1 parallax' data-speedx="0.009" data-speedy="0.005" data-speedz="0" data-rotation="0" />
        <div className="gh-tree1-overlay"></div>
        <img src={forestTree2} alt="Dekorativna slika" className='gh-tree2 parallax' data-speedx="0.06" data-speedy="0.055" data-speedz="0.09" data-rotation="0.09" />
        <div className="gh-tree2-overlay"></div>
        <img src={forestTree3} alt="Dekorativna slika" className='gh-tree3 parallax' data-speedx="0.018" data-speedy="0.023" data-speedz="0.02" data-rotation="0.05" />
        <div className="gh-tree3-overlay"></div>
        <div className="gh-content">
            <div className="ghc-text">
                <h1>Igraonica</h1>
                <h3>Naše igralište za decu je savršeno mesto za mališane da se igraju i istraže svet kroz igru dok roditelji uživaju u ukusnim obrocima i posebnim trenucima. Naš prostor je uređen sa pažnjom prema sigurnosti i udobnosti dece, pružajući im bezbrižno okruženje.</h3>
            </div>
        </div>
        <div className="gh-top-overlay"></div>
        <div className="gh-bottom-overlay"></div>
    </div>
  )
}

export default GameroomHero
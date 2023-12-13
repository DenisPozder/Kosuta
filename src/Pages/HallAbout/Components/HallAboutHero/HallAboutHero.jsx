import React from 'react'
import './hall-about-hero.css'
import aboutUsImg from '../../../../Assets/Restaurant/restaurantGarden13.jpg'

const HallAboutHero = () => {
  return (
    <div className="hall-about-hero">
        <img src={aboutUsImg} alt="O nama pozadina" />
        <div className="hah-wrap">
            <div className="hah-content">
                <h1 className='hah-title'><span className='hah-span1'>nešto više</span><span className='hah-span2'>o nama</span></h1>
                <p className='hah-desc1'>Restoran Košuta sa veoma dugom tradicijom, ali u novom ruhu smešten u samom srcu Košutnja, u najlepšem delu Beograda daleko od gradske vreve.</p>
                <p className='hah-desc2'>Pored niza sala za različite prilike i raznovrsnih menija, našim gostima je na raspolaganju parking, kao i igralište za naše najmlađe goste.</p>
                <div className='hah-btn'>radno vreme: 10-21h</div>
            </div>
        </div>
    </div>
  )
}

export default HallAboutHero
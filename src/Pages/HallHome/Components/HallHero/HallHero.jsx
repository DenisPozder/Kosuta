import React from 'react'
import './hall-hero.css'
import MainHallVideo from '../../../../Assets/Hall/mainHallVideo.mp4'
import {Link} from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";

const HallHero = () => {
  return (
    <div className='hall-hero'>
      <div className="hh-video">
        <video src={MainHallVideo} muted loop autoPlay playsInline></video>
      </div>
      <div className="hh-overlay"></div>
      <div className="hh-content">
        <div className="hh-content-text">
          <h1 className='hh-title'><span>Košuta</span><span>Proslave</span></h1>
          <h3 className='hh-desc'>Ušuškan unutar bujnog zagrljaja visokih četinara, Košuta nudi jedinstvenu fuziju modernog ambijenta i detalja prirode. Potopite svoje događaje u neuporedivu lepotu ovog prostora, gde se raskoš susreće s spokojem prirode</h3>
          <Link to='/sale'><h3>izaberi salu</h3><FaAngleRight /></Link>
        </div>
      </div>
    </div>
  )
}

export default HallHero
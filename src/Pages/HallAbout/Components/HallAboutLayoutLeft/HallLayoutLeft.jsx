import React from 'react'
import './hall-layout-left.css'
import gameroomImg from '../../../../Assets/Hall/gameroom.jpg'

const HallLayoutLeft = () => {
  return (
    <div className="hall-layout-left">
        <div className="hall-layout-left-content">
            <div className="hall-layout-left-column slide-in from-left">
            <img src={gameroomImg} alt="Igraonica" />
            </div>
            <div className="hall-layout-left-column slide-in from-right">
                <h1><span>zabava</span><span>za sve</span></h1>
                <p>Ušuškam među šarmantnim šumskim pejzažem, rostoran nudi divno igralište za decu, okruženo visokim drvećem. Pružajući siguran i zabavan prostor, mališani mogu slobodno uživati u igri dok roditelji degustiraju kulinarske specijalitete. Ova harmonična kombinacija šumskog okruženja i prostora za igru stvara nezaboravno porodično iskustvo.</p>
            </div>
        </div>
    </div>
  )
}

export default HallLayoutLeft
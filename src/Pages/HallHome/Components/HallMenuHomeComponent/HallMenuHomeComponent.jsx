import React from 'react'
import './hall-menu-home-component.css'
import { Link } from 'react-router-dom'
import treeImg1 from '../../../../Assets/Hall/forestTree3.png'
import treeImg2 from '../../../../Assets/Hall/forestTree1.png'
import treeImg3 from '../../../../Assets/Hall/forestTree2.png'

const HallHomeMenu = [
    {
        id: 1,
        title: "32€ po osobi",
        link: "/proslave/jelovnik#menu1"
    },
    {
        id: 2,
        title: "34€ po osobi",
        link: "/proslave/jelovnik#menu2"
    },
    {
        id: 3,
        title: "37€ po osobi",
        link: "/proslave/jelovnik#menu3"
    },
    {
        id: 4,
        title: "45€ po osobi",
        link: "/proslave/jelovnik#menu4"
    },
]

const HallMenuHomeComponent = () => {
  return (
    <div className="hall-menu-home-component">
        <img src={treeImg1} data-speedx="0.01" data-speedy="0.01" data-speedz="0" data-rotation="0" alt="Dekorativna slika" className='hmhc-tree1-img parallax' />
        <img src={treeImg2} data-speedx="0.018" data-speedy="0.03" data-speedz="0.06" data-rotation="0.06" alt="Dekorativna slika" className='hmhc-tree2-img parallax' />
        <img src={treeImg3} data-speedx="0.038" data-speedy="0.05" data-speedz="0.1" data-rotation="0.1" alt="Dekorativna slika" className='hmhc-tree3-img parallax' />
        <div className="hmhc-overlay"></div>
        <div className="hmhc-content">
            <h1>Ponuda menija</h1>
            <h2>Kompletan cenovnik</h2>
            <div className="hmhc-grid">
                {
                    HallHomeMenu.map((menu) => (
                        <Link to={menu.link} className='hmhc-column' key={menu.id}>
                            <h3>{menu.title}</h3>
                        </Link>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default HallMenuHomeComponent
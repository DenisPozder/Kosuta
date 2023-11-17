import React from 'react'
import './big-hall-vectors.css'
import { GiVineFlower } from "react-icons/gi";

const BigHallVectorsData = [
    {
        icon: <GiVineFlower />,
        title: "Venčanja"
    },
    {
        icon: <GiVineFlower />,
        title: "Rođendani"
    },
    {
        icon: <GiVineFlower />,
        title: "Seminari"
    },
    {
        icon: <GiVineFlower />,
        title: "Ostale Proslave"
    },
]

const BigHallVectors = () => {
  return (
    <div className="big-hall-vectors">
        <div className="bhv-content">
            {
                BigHallVectorsData.map((vector, index) => (
                    <div className="bhv-vector" key={index}>
                        <h3>{vector.icon}</h3>
                        <h1>{vector.title}</h1>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default BigHallVectors
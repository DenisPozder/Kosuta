import React, { useEffect, useState } from 'react'
import './restaurant-menu-header.css'
import { MdRestaurantMenu } from "react-icons/md";
import { BiSolidDrink } from "react-icons/bi";

const RestaurantMenuHeader = () => {

    const [ category, setCategory ] = useState("MEALS")

    useEffect(() => {
    },[])

  return (
    <div className="restaurant-menu-header">
        <div className="rmh-content">
            <h1>restoran srpske nacionalne kuhinje</h1>
            <div className="rmhc-items">
                <div className="rmhc-item">
                    <h3 className='rmhc-h3'><span>Jelovnik</span> <MdRestaurantMenu /></h3>
                </div>
                <div className="rmhc-item">
                    <h3 className='rmhc-h3'><span>Pića</span> <BiSolidDrink /></h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RestaurantMenuHeader
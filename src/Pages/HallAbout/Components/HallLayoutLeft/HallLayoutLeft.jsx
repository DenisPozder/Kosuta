import React from 'react'
import './hall-layout-left.css'
import hallImg  from '../../../../Assets/Hall/hallImg.jpg'

const HallLayoutLeft = () => {
  return (
    <div className="hall-layout-left">
        <div className="hall-layout-content">
            <div className="hall-layout-column">
                <img src={hallImg} alt="" />
            </div>
            <div className="hall-layout-column">
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            </div>
        </div>
    </div>
  )
}

export default HallLayoutLeft
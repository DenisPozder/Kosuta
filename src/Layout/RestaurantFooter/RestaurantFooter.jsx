import React from 'react'
import Logo from '../../Assets/logo.svg'
import { Link } from 'react-router-dom'
import { AiFillCopyrightCircle } from 'react-icons/ai'
import './restaurant-footer.css'

const getCurrentTime = () => {
  const now = new Date()
  const currentHour = now.getHours()
  const currentMinute = now.getMinutes()
  return currentHour + currentMinute / 60
}

const getCurrentDay = () => {
  const now = new Date()
  return now.getDay()
}

const RestaurantFooter = () => {

  const openingHour = 10.0
  const closingHour = 21.0
  const days = [
    "Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvratak", "Petak", "Subota"
  ]
  const currentDay = getCurrentDay()
  const currentTime = getCurrentTime()

  const status = {}

  for(let i = 0; i < 7; i++){
    const isOpen = currentTime >= openingHour && currentTime < closingHour
    status[i] = isOpen ? "Otvoreno" : "Zatvoreno"
  }
  
  return (
    <div className="restaurant-footer fade-in">
      <div className="rf-content">
        <div className="rf-column">
          <Link className="rfc-logo">
            <img src={Logo} alt="Košuta Logo" />
          </Link>
          <h3>Na vratima će vas sačekati naše čuveno gostoprimstvo, u salama tradicija i autentična dekoracija</h3>
        </div>
        <div className="rf-column">
          <h1>Radno Vreme: 10AM - 9PM</h1>
          <div className="rfc-days">
            {
              days.map((day, index) => (
                <p key={index} className={currentDay === index ? "current-day" : ""}>
                  {day}
                  {currentDay === index && <span>{status[index]}</span>}
                </p>
              ))
            }
          </div>
        </div>
        <div className="rf-column">
          <h1>Rezervacije</h1>
          <h3>Rezervišite svoje mesto pozivom na broj :</h3>
          <Link to="tel:+3810665255525">066 5255525</Link>
        </div>
      </div>
      <div className="rf-copyright">
        <h3><AiFillCopyrightCircle /><span>2023</span>
        </h3><h3>Košuta</h3>
      </div>
    </div>
  )
}

export default RestaurantFooter
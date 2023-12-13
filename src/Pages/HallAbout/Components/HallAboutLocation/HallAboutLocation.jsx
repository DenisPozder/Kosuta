import React from 'react'
import './hall-about-location.css'
import { Link } from 'react-router-dom'

const HallAboutLocation = () => {
  return (
    <div className="hall-about-location">
        <div className="hal-content">
            <div className="hal-column">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11330.202590860483!2d20.4376827!3d44.7695782!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a71cd217d1331%3A0x9866e4e49f98eaa!2zS2_FoXV0YQ!5e0!3m2!1sen!2srs!4v1702501548230!5m2!1sen!2srs" width="600" height="450" style={{border: '0'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="hal-column">
                <h1><span>kako</span><span>do nas</span></h1>
                <p>Ušuškan među mirnom šumom, restoran poziva goste u oazu prirodne lepote. Stolovi smešteni među drvećem pružaju jedinstvem ambijent za uživanje u ukusnim jelima uz umirujuće zvuke šuštanja lišća i ptica - savršen beg od gradske gužve.</p>
                <Link target='_blank' to={"https://www.google.com/maps/place/Ko%C5%A1uta/@44.7695782,20.4376827,15z/data=!4m2!3m1!1s0x0:0x9866e4e49f98eaa?sa=X&ved=2ahUKEwi4kfyQqo2DAxX1FRAIHfJPAO8Q_BJ6BAgMEAA"}><h3>pogledaj mapu</h3></Link>
            </div>
        </div>
    </div>
  )
}

export default HallAboutLocation
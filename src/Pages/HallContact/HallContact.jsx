import React from 'react'
import HallLayout from '../../Layout/HallLayout/HallLayout'
import ContactComponent from './Components/ContactComponent/ContactComponent'

const HallContact = () => {
  return (
    <HallLayout>
        <section className="page-section">
            <ContactComponent />
        </section>
    </HallLayout>
  )
}

export default HallContact
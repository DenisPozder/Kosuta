import React from 'react'
import RestaurantNavbar from '../../Layout/RestaurantNavbar/RestaurantNavbar'
import RestaurantLayout from '../../Layout/RestaurantLayout/RestaurantLayout'
import RestaurantHero from './Components/RestaurantHero/RestaurantHero'

const RestaurantHome = () => {
  return (
    <>
    <RestaurantLayout>
      <section className='page-section'>
        <RestaurantHero />
        RestaurantHome
      </section>
    </RestaurantLayout>
    </>
  )
}

export default RestaurantHome
import React from 'react'
import RestaurantLayout from '../../Layout/RestaurantLayout/RestaurantLayout'
import RestaurantMenuHeader from './Components/RestaurantMenuHeader/RestaurantMenuHeader'
import RestaurantMenuHero from './Components/RestaurantMenuHero/RestaurantMenuHero'
import restaurantMeal from '../../Assets/Restaurant/restaurantMeal7.png'
import restaurantMealImage from '../../Assets/Restaurant/restaurantMealImg.jpg'

const MenuPageFood = [
  {
    id: 1,
    title: "First Meal",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: restaurantMeal,
    fullImage: restaurantMealImage
  },
  {
    id: 2,
    title: "Second Meal",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: restaurantMeal,
    fullImage: restaurantMealImage
  },
]

const RestaurantMenuPage = () => {
  return (
    <>
    <RestaurantLayout>
      <section className='page-section'>
      <RestaurantMenuHero slides={MenuPageFood} />
      <RestaurantMenuHeader />
      </section>
    </RestaurantLayout>
    </>
  )
}

export default RestaurantMenuPage
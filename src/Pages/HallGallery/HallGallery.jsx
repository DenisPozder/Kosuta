import React from 'react'
import HallLayout from '../../Layout/HallLayout/HallLayout'
import HallGalleryComponent from './Components/HallGalleryComponent/HallGalleryComponent'

const HallGallery = () => {
  return (
    <HallLayout>
        <section className='page-section'>
            <HallGalleryComponent />
        </section>
    </HallLayout>
  )
}

export default HallGallery
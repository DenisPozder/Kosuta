import React, { useEffect, useState } from 'react'
import './rg-component.css'
import { RestaurantGalleryData } from '../../../../RestaurantData/RestaurantGalleryData'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useTranslation } from 'react-i18next'

const TagButton = ({ name, handleSetTag, isActive }) => {
  return (
    <button className={`rgc-button ${isActive ? 'rgb-active' : ''}`} onClick={() => handleSetTag(name)}>
      <h3>{name.toUpperCase()}</h3>
    </button>
  )
}

const RGComponent = () => {

  const { t } = useTranslation('restaurantGallery')
  const [ tag, setTag ] = useState('sve')
  const [ filteredImages, setFilteredImages ] = useState([])

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    }

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add('in-viewport')
          observer.unobserve(entry.target);
        }else {
          entry.target.classList.remove('in-viewport')
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, options)
    const images = document.querySelectorAll('.rgc-gallery-image')

    images.forEach((image) => {
      observer.observe(image)
    })

    return () => {
      observer.disconnect()
    }
  },[filteredImages])

  useEffect(() => {
    tag === 'sve' ? setFilteredImages(RestaurantGalleryData) : setFilteredImages(RestaurantGalleryData.filter(image => image.tag === tag))
  },[tag])

  return (
    <div className="rg-component">
        <div className="rgc-content">
            <h1>{t('rgcTitle')}</h1>
            <div className="rgc-categories">
              <div className='rgc-text'><h3>{t('rgcBanner')}</h3></div>
              <TagButton name='sve' handleSetTag={setTag} isActive={tag === 'sve'} />
              <TagButton name='interijer' handleSetTag={setTag} isActive={tag === 'interijer'}  />
              <TagButton name='bašta' handleSetTag={setTag} isActive={tag === 'bašta'}  />
            </div>
            <div className="rgc-gallery">
              {filteredImages.map((image, index) => (
                <div className={`rgc-gallery-image in-viewport`} key={`${tag}-${index}`}>
                  <LazyLoadImage src={image.image} alt={`Slika ${index + 1}`} />
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default RGComponent
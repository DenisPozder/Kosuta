import React, { useEffect, useState } from 'react'
import './hall-gallery-component.css'
import { HallGalleryData } from '../../../../HallData/HallGalleryData'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const HGCButton = ({ title, isActive, handleGalleryButton, category }) => {
    return (
        <button className={`hgc-btn ${isActive ? "active" : ""}`} onClick={() => handleGalleryButton(category)}>{title}</button>
    )
}

const HallGalleryComponent = () => {

    const [ category, setCategory ] = useState('sve')
    const [ gallery, setGallery ] = useState([])

    useEffect(() => {
        category === 'sve' ? setGallery(HallGalleryData) : setGallery(HallGalleryData.filter(image => image.category === category))
      },[category])

  return (
    <div className="hall-gallery-component">
        <h1 className='hgc-title'>Dobrodošli u našu galeriju</h1>
        <div className="hall-gallery-header">
            <HGCButton title={"sve"} category={"sve"} handleGalleryButton={setCategory} isActive={category === "sve"} />
            <HGCButton title={"grande"} category={"grande"} handleGalleryButton={setCategory} isActive={category === "grande"} />
            <HGCButton title={"svečana"} category={"svečana"} handleGalleryButton={setCategory} isActive={category === "svečana"} />
            <HGCButton title={"kamin"} category={"kamin"} handleGalleryButton={setCategory} isActive={category === "kamin"} />
        </div>
        <div className="hgc-content">
            {
                gallery.map((image, index) => (
                    <div className='hgc-gallery-image' key={`${category}-${index}`}>
                        <LazyLoadImage src={image.image} alt={`Slika ${index + 1}`} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default HallGalleryComponent
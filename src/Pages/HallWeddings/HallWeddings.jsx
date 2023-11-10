import React from 'react'
import HallLayout from '../../Layout/HallLayout/HallLayout'
import HallImageSlider from '../../Components/HallImageSlider/HallImageSlider'
import bouquet from '../../Assets/Hall/bouquet.png'
import bouquet2 from '../../Assets/Hall/bouquet2.png'
import HallLayoutLeft from '../../Components/HallLayoutLeft/HallLayoutLeft'
import weddingImg from '../../Assets/Hall/wedding.jpg'
import bouquet3 from '../../Assets/Hall/bouquet3.png'
import HallGallerySlider from '../../Components/HallGallerySlider/HallGallerySlider'
import WeddingsVectors from './Components/WeddingsVectors/WeddingsVectors'
import { WeddingsData } from '../../HallData/HallIImageData'
import { WeddingsGallerySlider } from '../../HallData/GallerySliderData'

const HallWeddings = () => {
  return (
    <HallLayout>
        <section className="page-section">
            <HallImageSlider slides={WeddingsData} decoration1={bouquet2} decoration2={bouquet} />
            <HallLayoutLeft image={weddingImg} imageDecoration={bouquet3} text="Osvježite vaše venčanje u našem prelepom restoranu Košuta! Naša renomirana lokacija nudi tri elegantne sale za venčanja, pružajući vam besprekoran ambijent za vaš poseban dan. Bez obzira da li sanjate o intimnom venčanju u manjem krugu ili velikom slavlju sa mnogo gostiju, naša raznovrsna ponuda prostora će zadovoljiti sve vaše potrebe. Naš iskusni tim posvećen je tome da vaš dan bude nezaboravan, pružajući vrhunsku uslugu i ukusnu kuhinju koja će obradovati vaše čulo ukusa. U Košuti, vaše venčanje će zasijati svetlošću ljubavi i sreće, stvarajući nezaboravne trenutke za vas i vaše goste." />
            <WeddingsVectors />
            <HallGallerySlider data={WeddingsGallerySlider} />
        </section>
    </HallLayout>
  )
}

export default HallWeddings
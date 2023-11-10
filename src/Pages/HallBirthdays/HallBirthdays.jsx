import React from 'react'
import HallLayout from '../../Layout/HallLayout/HallLayout'
import HallImageSlider from '../../Components/HallImageSlider/HallImageSlider'
import { BirthdaysData } from '../../HallData/HallIImageData'
import balloons from '../../Assets/Hall/balloons.png'
import gift from '../../Assets/Hall/greenGift.png'
import HallLayoutLeft from '../../Components/HallLayoutLeft/HallLayoutLeft'
import birthdayImg from '../../Assets/Hall/birthday.jpg'
import birthdayGift from '../../Assets/Hall/birthdayGift1.png'
import HallGallerySlider from '../../Components/HallGallerySlider/HallGallerySlider'
import { BirthdaysGallerySlider } from '../../HallData/GallerySliderData'

const HallBirthdays = () => {
  return (
    <HallLayout>
        <section className='page-section'>
            <HallImageSlider slides={BirthdaysData} decoration1={balloons} decoration2={gift} />
            <HallLayoutLeft imageDecoration={birthdayGift} text="Neka vaša proslava rođendana bude nezaboravna u našem prelepom restoranu Košuta! Naša etablirana lokacija nudi tri luksuzne sale za proslave koje će ispuniti sve vaše potrebe i želje. Bez obzira da li slavite rođendan sa porodicom, prijateljima ili kolegama, naš restoran je savršeno mesto za vas. Naši iskusni kuvari pripremiće ukusne specijalitete kako biste uživali u vrhunskoj kuhinji, a naš stručni tim osoblja pobrinuće se da se osećate kao pravi gosti. Osim toga, naša tri sale pružaju različite ambijente - od elegantnog i intimnog do prostranog i veselog - tako da možete odabrati onu koja najbolje odgovara vašem stilu proslave. U Košuti, svaki rođendan postaje poseban događaj." image={birthdayImg} />
            <HallGallerySlider data={BirthdaysGallerySlider} />
        </section>
    </HallLayout>
  )
}

export default HallBirthdays
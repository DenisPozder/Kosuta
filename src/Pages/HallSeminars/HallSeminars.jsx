import React from 'react'
import HallLayout from '../../Layout/HallLayout/HallLayout'
import HallImageSlider from '../../Components/HallImageSlider/HallImageSlider'
import seminarChair from '../../Assets/Hall/seminarChair.png'
import seminarNote from '../../Assets/Hall/seminarNote.png'
import { SeminarsData } from '../../HallData/HallIImageData'
import HallLayoutLeft from '../../Components/HallLayoutLeft/HallLayoutLeft'
import seminarImg from '../../Assets/Hall/seminar.jpg'
import seminarDesk from '../../Assets/Hall/seminarDesk.png'
import HallGallerySlider from '../../Components/HallGallerySlider/HallGallerySlider'
import { SeminarsGallerySlider } from '../../HallData/GallerySliderData'

const HallSeminars = () => {
  return (
    <HallLayout>
        <section className='page-section'>
          <HallImageSlider slides={SeminarsData} decoration1={seminarChair} decoration2={seminarNote} />
          <HallLayoutLeft imageDecoration={seminarDesk} image={seminarImg} text="Organizujte svoj naredni seminar u našem restoranu Košuta i obezbedite savršen prostor za uspešno održavanje događaja. Naša multifunkcionalna sala za seminare nudi udoban i inspirativan ambijent, savremeniju tehničku opremu i izvanrednu ugostiteljsku ponudu. Bez obzira da li organizujete poslovni seminar, obuku, ili bilo koji drugi oblik edukacije, naš restoran vam pruža sve što vam je potrebno da vaša manifestacija bude produktivna i nezaboravna. Vaši učesnici će uživati u udobnom okruženju i vrhunskoj usluzi dok rade na ostvarivanju svojih ciljeva." />
          <HallGallerySlider data={SeminarsGallerySlider} />
        </section>
    </HallLayout>
  )
}

export default HallSeminars
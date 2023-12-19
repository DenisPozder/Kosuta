import React, { useEffect } from 'react'
import RestaurantLayout from '../../Layout/RestaurantLayout/RestaurantLayout'
import RestaurantMenuHeader from './Components/RestaurantMenuHeader/RestaurantMenuHeader'
import RestaurantMenuHero from './Components/RestaurantMenuHero/RestaurantMenuHero'
import mealImg1 from '../../Assets/Restaurant/meal1.jpg'
import mealImg2 from '../../Assets/Restaurant/meal2.jpg'
import mealImg3 from '../../Assets/Restaurant/meal3.jpg'
import mealImg4 from '../../Assets/Restaurant/meal4.jpg'
import mealTrans1 from '../../Assets/Restaurant/meal1Transparent.png'
import mealTrans2 from '../../Assets/Restaurant/meal2Transparent.png'
import mealTrans3 from '../../Assets/Restaurant/meal3Transparent.png'
import mealTrans4 from '../../Assets/Restaurant/meal4Transparent.png'

const MenuPageFood = [
  {
    id: 1,
    title: "Njeguška pršuta",
    engTitle: "",
    desc: "Njeguška Pršuta, tradicionalni crnogorski delikates, predstavlja vrhunski sušeni i dimljeni pršut koji potiče iz sela Njeguši. Priprema Njeguškog pršuta počinje odabranim komadom svinjskog buta, koji se najpre soli radi konzerviranja. Nakon soljenja, pršut se ostavlja da odmara, a zatim se izlaže dimu sušenja.",
    engDesc: "",
    image: mealTrans1,
    fullImage: mealImg1
  },
  {
    id: 2,
    title: "Pljeskavica",
    engTitle: "",
    desc: "Pljeskavica je sočni mesni burger pripremljena od pažljivo odabrane mešavine mlevenog mesa, često kombinujući junetinu i svinjetinu. Meso se oblikuje u ravne ploške i peče na roštilju ili tiganju. Ključni elementi pljeskavice su bogat ukus mesa, sočnost i karakteristična tekstura koja ostaje mekana unutar hrskave kore.",
    engDesc: "",
    image: mealTrans2,
    fullImage: mealImg2
  },
  {
    id: 3,
    title: "Pileći file na žaru",
    engTitle: "",
    desc: "Pileći file na žaru je ukusno jelo koje se priprema od sočnih pilećih fileta pečenih na roštilju. Fileti se obično pripremaju u začinima kako bi se pojačao ukus i sočnost mesa. Nakom mariniranja, pileći fileti se stavljaju na roštilj, gde se peku do savršene sočnosti i zlatno smeđe boje. Jelo je poznato po blagoj i svežoj aromi piletine, uz dodatnu dimnu notu od roštilja",
    engDesc: "",
    image: mealTrans3,
    fullImage: mealImg3
  },
  {
    id: 4,
    title: "Bečka šnicla",
    engTitle: "",
    desc: "Bečka šnicla poznata i kao Bečki odrezak, je klasik austrijske kuhinje i jedno od najpoznatijih jela svetske kuhinje. Ovo ukusno jelo čini tanak odrezak mesa, obilno telećeg ili svinjskog, koji je prvo umočen u brašno, zatim u jaja i na kraju u krušne mrvice ili prezlu.",
    engDesc: "",
    image: mealTrans4,
    fullImage: mealImg4
  },
]

const RestaurantMenuPage = () => {

  /*----- Intersection Observer -----*/
useEffect(() => {

  const faders = document.querySelectorAll('.fade-in')
  const sliders = document.querySelectorAll('.slide-in')

  const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
  }

  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return;
      }else {
        entry.target.classList.add('appear')
        appearOnScroll.unobserve(entry.target)
      }
    })
  }, appearOptions)

  faders.forEach(fader => {
    appearOnScroll.observe(fader)
  })

  sliders.forEach(slider => {
    appearOnScroll.observe(slider)
  })

},[])

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
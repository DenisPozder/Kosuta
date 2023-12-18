import React, { useEffect, useState } from 'react'
import './all-halls-tabs.css'
import sampleImage from '../../../../Assets/Hall/hall1.jpg'
import sampleImage2 from '../../../../Assets/Hall/hall2.jpg'
import sampleImage3 from '../../../../Assets/Hall/hall3.jpg'
import AllHallsSlider from '../AllHallsSlider/AllHallsSlider'
import { Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa'
import SampleSlider from '../SampleSlider/SampleSlider'
import kamin1Img from '../../../../Assets/Hall/kamin4.jpg'
import kamin2Img from '../../../../Assets/Hall/kamin17.jpg'
import kamin3Img from '../../../../Assets/Hall/kamin26.jpg'
import kamin4Img from '../../../../Assets/Hall/kamin30.jpg'
import kamin5Img from '../../../../Assets/Hall/kamin35.jpg'
import kamin6Img from '../../../../Assets/Hall/kamin39.jpg'
import kamin7Img from '../../../../Assets/Hall/kamin47.jpg'
import kamin8Img from '../../../../Assets/Hall/kamin48.jpg'
import kamin9Img from '../../../../Assets/Hall/kamin50.jpg'

const AllHallsData = [
    {
        title: "sala grande",
        desc: "Svečana sala pruža ugodan prostor koji sa svojim raskošnim enterijerom i prirodnim dekoracijama pruža prikladno okruženje za sve vrste okupljanja sa ograničenim brojem gostiju.",
        category: "grande",
        images: [
            {
                image: {
                    img: sampleImage
                }
            },
            {
                image: {
                    img: sampleImage
                }
            },
            {
                image: {
                    img: sampleImage
                }
            },
            {
                image: {
                    img: sampleImage
                }
            },
            {
                image: {
                    img: sampleImage
                }
            },
            {
                image: {
                    img: sampleImage
                }
            },
            {
                image: {
                    img: sampleImage
                }
            },
            {
                image: {
                    img: sampleImage
                }
            },
            {
                image: {
                    img: sampleImage
                }
            },
        ]
    },
    {
        title: "svečana sala",
        desc: "Svečana sala pruža ugodan prostor koji sa svojim raskošnim enterijerom i prirodnim dekoracijama pruža prikladno okruženje za sve vrste okupljanja sa ograničenim brojem gostiju.",
        category: "svecana",
        images: [
            {
                image: {
                    img: sampleImage2
                }
            },
            {
                image: {
                    img: sampleImage2
                }
            },
            {
                image: {
                    img: sampleImage2
                }
            },
            {
                image: {
                    img: sampleImage2
                }
            },
            {
                image: {
                    img: sampleImage2
                }
            },
            {
                image: {
                    img: sampleImage2
                }
            },
            {
                image: {
                    img: sampleImage2
                }
            },
            {
                image: {
                    img: sampleImage2
                }
            },
            {
                image: {
                    img: sampleImage2
                }
            },
        ]
    },
    {
        title: "kamin sala",
        desc: "Svečana sala pruža ugodan prostor koji sa svojim raskošnim enterijerom i prirodnim dekoracijama pruža prikladno okruženje za sve vrste okupljanja sa ograničenim brojem gostiju.",
        category: "kamin",
        images: [
            {
                image: {
                    img: kamin1Img
                }
            },
            {
                image: {
                    img: kamin2Img
                }
            },
            {
                image: {
                    img: kamin3Img
                }
            },
            {
                image: {
                    img: kamin4Img
                }
            },
            {
                image: {
                    img: kamin5Img
                }
            },
            {
                image: {
                    img: kamin6Img
                }
            },
            {
                image: {
                    img: kamin7Img
                }
            },
            {
                image: {
                    img: kamin8Img
                }
            },
            {
                image: {
                    img: kamin9Img
                }
            },
        ]
    },
    {
        title: "bašta",
        desc: "Svečana sala pruža ugodan prostor koji sa svojim raskošnim enterijerom i prirodnim dekoracijama pruža prikladno okruženje za sve vrste okupljanja sa ograničenim brojem gostiju.",
        category: "basta",
        images: [
            {
                image: {
                    img: sampleImage
                }
            },
            {
                image: {
                    img: sampleImage
                }
            },
            {
                image: {
                    img: sampleImage
                }
            },
            {
                image: {
                    img: sampleImage
                }
            },
            {
                image: {
                    img: sampleImage
                }
            },
            {
                image: {
                    img: sampleImage
                }
            },
            {
                image: {
                    img: sampleImage
                }
            },
            {
                image: {
                    img: sampleImage
                }
            },
            {
                image: {
                    img: sampleImage
                }
            },
        ]
    }
]

const TabButton = ({title, isActive, handleSetButton, category}) => {
    return (
        <button className={`tab-button ${isActive ? "active" : ""}`} onClick={() => handleSetButton(category)}>
            <h3>{title}</h3>
        </button>
    )
}

const AllHallsTabs = () => {
    const [ category, setCategory ] = useState('grande')
    const [ content, setContent ] = useState([])

    useEffect(() => {
        setContent(AllHallsData.filter(data => data.category === category))
    },[category])

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
  
  },[content])

  return (
    <div className="all-halls-tabs">
        <div className="aht-tabs fade-in">
            <TabButton category={'grande'} title={'200 - 400 gostiju'} handleSetButton={setCategory} isActive={category === 'grande'} />
            <TabButton category={'svecana'} title={'100 - 170 gostiju'} handleSetButton={setCategory} isActive={category === 'svecana'} />
            <TabButton category={'kamin'} title={'do 80 gostiju'} handleSetButton={setCategory} isActive={category === 'kamin'} />
            <TabButton category={'basta'} title={'200 gostiju (bašta)'} handleSetButton={setCategory} isActive={category === 'basta'} />
        </div>
        <div className="aht-wrap">
            <div className="aht-content">
            {
                content.map((item, index) => (
                    <div key={`${category}-${index}`}>
                        <div className="aht-text">
                            <h1 className='slide-in from-top'>{item.title}</h1>
                            <p className='slide-in from-bottom'>{item.desc}</p>
                        </div>
                        <AllHallsSlider images={item.images} />
                        <div className="aht-button-wrap slide-in from-bottom">
                            <Link className='aht-button' to={'/rezervacije'}><h3>rezerviši salu</h3><FaChevronRight /></Link>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default AllHallsTabs
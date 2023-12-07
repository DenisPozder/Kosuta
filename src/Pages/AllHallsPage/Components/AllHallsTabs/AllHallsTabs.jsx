import React, { useEffect, useState } from 'react'
import './all-halls-tabs.css'
import sampleImage from '../../../../Assets/Hall/hall1.jpg'
import sampleImage2 from '../../../../Assets/Hall/hall2.jpg'
import sampleImage3 from '../../../../Assets/Hall/hall3.jpg'
import AllHallsSlider from '../AllHallsSlider/AllHallsSlider'
import { Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa'

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
                    img: sampleImage3
                }
            },
            {
                image: {
                    img: sampleImage3
                }
            },
            {
                image: {
                    img: sampleImage3
                }
            },
            {
                image: {
                    img: sampleImage3
                }
            },
            {
                image: {
                    img: sampleImage3
                }
            },
            {
                image: {
                    img: sampleImage3
                }
            },
            {
                image: {
                    img: sampleImage3
                }
            },
            {
                image: {
                    img: sampleImage3
                }
            },
            {
                image: {
                    img: sampleImage3
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

  return (
    <div className="all-halls-tabs">
        <div className="aht-tabs">
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
                            <h1>{item.title}</h1>
                            <p>{item.desc}</p>
                        </div>
                        <AllHallsSlider images={item.images} />
                        <div className="aht-button-wrap">
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
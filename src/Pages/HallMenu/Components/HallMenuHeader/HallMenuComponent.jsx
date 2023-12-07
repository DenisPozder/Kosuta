import React, { useEffect, useState } from 'react'
import './hall-menu-component.css'
import { Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa'

const HallMenuData = [
    {
      title: "Predjelo",
      category: "32",
      subTitle: [
        {
          title: "mesni proizvodi:",
          paragraphs: [
            {
              title: "Pršuta Njeguška,"
            },
            {
              title: "Svinjska pečenica,"
            },
            {
              title: "Goveđa pečenica,"
            },
            {
              title: "Kulen,"
            },
            {
              title: "Budimska"
            },
          ]
        },
        {
          title: "sirevi:",
          paragraphs: [
            {
              title: "Kajmak,"
            },
            {
              title: "Mladi sir,"
            },
            {
              title: "Kačkavalj"
            },
          ]
        },
        {
          title: "peciva:",
          paragraphs: [
            {
              title: "Proja,"
            },
            {
              title: "Pita sa mesom,"
            },
            {
              title: "Pita sa sirom"
            },
          ]
        },
        {
          title: "dodaci:",
          paragraphs: [
            {
              title: "Masline"
            }
          ]
        },
      ]
    },
    {
      title: "Salate",
      category: "32",
      subTitle: [
        {
          title: "Ruska"
        },
        {
          title: "Kupus salata"
        },
        {
          title: "Sezonska"
        },
      ]
    },
    {
      title: "Čorba",
      category: "32",
      subTitle: [
        {
          title: "Teleća"
        }
      ]
    },
    {
      title: "Glavno jelo",
      category: "32",
      subTitle: [
        {
          title: "roštilj:",
          paragraphs: [
            {
              title: "Pljeskavica,"
            },
            {
              title: "Ćevapi,"
            },
            {
              title: "Vešalica,"
            },
            {
              title: "Pileće belo meso,"
            },
            {
              title: "Dimljeni vrat,"
            },
            {
              title: "Domaća kobasica,"
            },
            {
              title: "Pileći batak"
            },
          ]
        },
        {
          title: "prilog:",
          paragraphs: [
            {
              title: "Pekarski krompir"
            }
          ]
        }
      ]
    },
    {
      title: "Piće",
      category: "32",
      subTitle: [
        {
          title: "rakije:",
          paragraphs: [
            {
              title: "Dunja,"
            },
            {
              title: "Kajsija,"
            },
            {
              title: "Šljiva,"
            },
            {
              title: "Loza,"
            },
            {
              title: "Viljamovka"
            },
          ]
        },
        {
          title: "vina:",
          paragraphs: [
            {
              title: "Crveno vino 0,7l ( Vinarija Oplenac ),"
            },
            {
              title: "Roze vino 0,7l ( Vinarija Oplenac ),"
            },
            {
              title: "Belo vino 0,7l ( Vinarija Oplenac )"
            },
          ]
        },
        {
          title: "pivo:",
          paragraphs: [
            {
              title: "Lav Premium 0,33l,"
            },
            {
              title: "Lav točeno 0,33l"
            },
          ]
        },
        {
          title: "voda:",
          paragraphs: [
            {
              title: "Knjaz Miloš gazirana,"
            },
            {
              title: "Aqua Viva negazirana"
            },
          ]
        },
        {
          title: "sokovi:",
          paragraphs: [
            {
              title: "Coca-Cola,"
            },
            {
              title: "Coca-Cola Zero,"
            },
            {
              title: "Fanta,"
            },
            {
              title: "Bitter Lemon,"
            },
            {
              title: "Tonic Water,"
            },
            {
              title: "Sprite,"
            },
            {
              title: "Jabuka,"
            },
            {
              title: "Jagoda,"
            },
            {
              title: "Breskva,"
            },
            {
              title: "Đus"
            },
          ]
        },
        {
          title: "ostala pića:",
          paragraphs: [
            {
              title: "Vermut,"
            },
            {
              title: "Vodka,"
            },
            {
              title: "Vinjak,"
            },
            {
              title: "Dzin,"
            },
            {
              title: "Pelinkovac"
            },
          ]
        },
        {
          title: "kafa:",
          paragraphs: [
            {
              title: "Kafa domaća,"
            },
            {
              title: " Kafa espresso,"
            },
            {
              title: "Nes kafa"
            },
          ]
        },
      ]
    },
]

const HallMenuTab = ({ title, isActive, handleTabButton, category }) => {
  return (
    <button className={`hall-menu-tab ${isActive ? "active" : ""}`} onClick={() => handleTabButton(category)}>
      {title}
    </button>
  )
}

const HallMenuComponent = () => {

  const [ category, setCategory ] = useState('32')
  const [ content, setContent ] = useState([])

  useEffect(() => {
    setContent(HallMenuData.filter(data => data.category === category))
  },[category])

  return (
    <div className="hall-menu-component">
        <div className="hall-menu-header">
          <HallMenuTab category={'32'} title={"32€ po osobi"} handleTabButton={setCategory} isActive={category === "32"} />
          <HallMenuTab category={'34'} title={"34€ po osobi"} handleTabButton={setCategory} isActive={category === "34"} />
          <HallMenuTab category={'37'} title={"37€ po osobi"} handleTabButton={setCategory} isActive={category === "37"} />
          <HallMenuTab category={'45'} title={"45€ po osobi"} handleTabButton={setCategory} isActive={category === "45"} />
        </div>
        <div className="hmc-content">
          {
            content.map((item, index) => (
              <div key={index} className='hmc-title'>
                <h1>{item.title}</h1>
                <div className="hmc-subtitle">
                {
                  item.subTitle.map((subTitle, subIndex) => (
                    <div className='flex' key={subIndex}>
                      <h3>{subTitle.title}</h3>
                      <div className="hmc-paragraph">
                        {
                          subTitle.paragraphs && subTitle.paragraphs.length > 0 && 
                          subTitle.paragraphs.map((paragraph, parIndex) => (
                            <p key={parIndex}>{paragraph.title}</p>
                          ))
                        }
                      </div>
                    </div>
                  ))
                }
                </div>
              </div>
            ))
          }
          <div className="hmc-btn-content">
          <Link className='hmc-btn' to={'/rezervacije'}><h3>rezerviši salu <span><FaChevronRight /></span></h3></Link>
          </div>
        </div>
    </div>
  )
}

export default HallMenuComponent
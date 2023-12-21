import React, { useEffect, useState } from 'react'
import './hall-menu-component.css'
import foodImg from '../../../../Assets/Hall/foodImg.jpg'
import kosutaLogo from '../../../../Assets/logo.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useTranslation } from 'react-i18next'

const HallMenuData = [
    {
      title: "Predjelo",
      engTitle: "",
      category: "32",
      subTitle: [
        {
          title: "mesni proizvodi",
          engTitle: "",
          paragraphs: [
            {
              title: "Pršuta Njeguška, Svinjska pečenica, Goveđa pečenica, Kulen, Budimska",
              engTitle: ""
            }
          ]
        },
        {
          title: "sirevi",
          engTitle: "",
          paragraphs: [
            {
              title: "Kajmak, Mladi sir, Kačkavalj",
              engTitle: "",
            },
          ]
        },
        {
          title: "peciva",
          engTitle: "",
          paragraphs: [
            {
              title: "Proja, Pita sa mesom, Pita sa sirom",
              engTitle: "",
            },
          ]
        },
        {
          title: "dodaci",
          engTitle: "",
          paragraphs: [
            {
              title: "Masline",
              engTitle: "",
            }
          ]
        },
      ]
    },
    {
      title: "Salate",
      engTitle: "",
      category: "32",
      subTitle: [
        {
          title: "Ruska",
          engTitle: "",
        },
        {
          title: "Kupus salata",
          engTitle: "",
        },
        {
          title: "Sezonska",
          engTitle: "",
        },
      ]
    },
    {
      title: "Čorba",
      engTitle: "",
      category: "32",
      subTitle: [
        {
          title: "Teleća",
          engTitle: "",
        }
      ]
    },
    {
      title: "Glavno jelo",
      engTitle: "",
      category: "32",
      subTitle: [
        {
          title: "roštilj",
          engTitle: "",
          paragraphs: [
            {
              title: "Pljeskavica, Ćevapi, Vešalica, Pileće belo meso, Dimljeni vrat, Domaća kobasica, Pileći batak",
              engTitle: "",
            },
          ]
        },
        {
          title: "prilog",
          engTitle: "",
          paragraphs: [
            {
              title: "Pekarski krompir",
              engTitle: "",
            }
          ]
        }
      ]
    },
    {
      title: "Piće",
      engTitle: "",
      category: "32",
      subTitle: [
        {
          title: "rakije",
          engTitle: "",
          paragraphs: [
            {
              title: "Dunja, Kajsija, Šljiva, Loza, Viljamovka",
              engTitle: "",
            },
          ]
        },
        {
          title: "vina",
          engTitle: "",
          paragraphs: [
            {
              title: "Crveno vino 0,7l, Roze vino 0,7l, Belo vino 0,7l ( Vinarija Oplenac )",
              engTitle: "",
            },
          ]
        },
        {
          title: "pivo",
          engTitle: "",
          paragraphs: [
            {
              title: "Lav Premium 0,33l, Lav točeno 0,33l",
              engTitle: "",
            },
          ]
        },
        {
          title: "voda",
          engTitle: "",
          paragraphs: [
            {
              title: "Knjaz Miloš gazirana, Aqua Viva negazirana",
              engTitle: "",
            },
          ]
        },
        {
          title: "sokovi",
          engTitle: "",
          paragraphs: [
            {
              title: "Coca-Cola, Coca-Cola Zero, Fanta, Bitter Lemon, Tonic Water, Sprite, Jabuka, Jagoda, Breskva, Đus",
              engTitle: "",
            },
          ]
        },
        {
          title: "ostala pića",
          engTitle: "",
          paragraphs: [
            {
              title: "Vermut, Vodka, Vinjak, Dzin, Pelinkovac",
              engTitle: "",
            },
          ]
        },
        {
          title: "kafa",
          engTitle: "",
          paragraphs: [
            {
              title: "Kafa domaća, Kafa espresso, Nes kafa",
              engTitle: "",
            },
          ]
        },
      ]
    },
    {
      title: "Predjelo",
      engTitle: "",
      category: "34",
      subTitle: [
        {
          title: "mesni proizvodi",
          engTitle: "",
          paragraphs: [
            {
              title: "Pršuta Njeguška, Svinjska pečenica, Goveđa pečenica, Kulen, Budimska",
              engTitle: "",
            }
          ]
        },
        {
          title: "sirevi",
          engTitle: "",
          paragraphs: [
            {
              title: "Kajmak, Mladi sir, Kačkavalj",
              engTitle: "",
            },
          ]
        },
        {
          title: "peciva",
          engTitle: "",
          paragraphs: [
            {
              title: "Proja, Pita sa mesom, Pita sa sirom",
              engTitle: "",
            },
          ]
        },
        {
          title: "dodaci",
          engTitle: "",
          paragraphs: [
            {
              title: "Masline",
              engTitle: "",
            }
          ]
        },
      ]
    },
    {
      title: "Salate",
      engTitle: "",
      category: "34",
      subTitle: [
        {
          title: "Ruska",
          engTitle: "",
        },
        {
          title: "Kupus salata",
          engTitle: "",
        },
        {
          title: "Sezonska",
          engTitle: "",
        },
      ]
    },
    {
      title: "Čorba",
      engTitle: "",
      category: "34",
      subTitle: [
        {
          title: "Teleća",
          engTitle: "",
        }
      ]
    },
    {
      title: "Međujelo",
      engTitle: "",
      category: "34",
      subTitle: [
        {
          title: "Sarmice od želja sa kiselim kupusom",
          engTitle: "",
        }
      ]
    },
    {
      title: "Glavno jelo",
      engTitle: "",
      category: "34",
      subTitle: [
        {
          title: "roštilj",
          engTitle: "",
          paragraphs: [
            {
              title: "Pljeskavica, Ćevapi, Vešalica, Pileće belo meso, Dimljeni vrat, Domaća kobasica, Pileći batak",
              engTitle: "",
            },
          ]
        },
        {
          title: "teleći medaljoni",
          engTitle: "",
          paragraphs: [
            {
              title: "Sa vrganjima i šampinjonima",
              engTitle: "",
            }
          ]
        },
        {
          title: "pohovana piletina",
          engTitle: "",
          paragraphs: [
            {
              title: "Sa susamom i tartat sosom",
              engTitle: "",
            }
          ]
        },
        {
          title: "prilog",
          engTitle: "",
          paragraphs: [
            {
              title: "Pekarski krompir",
              engTitle: "",
            }
          ]
        }
      ]
    },
    {
      title: "Piće",
      engTitle: "",
      category: "34",
      subTitle: [
        {
          title: "rakije",
          engTitle: "",
          paragraphs: [
            {
              title: "Dunja, Kajsija, Šljiva, Loza, Viljamovka",
              engTitle: "",
            },
          ]
        },
        {
          title: "medene rakije",
          engTitle: "",
          paragraphs: [
            {
              title: "Malina, Dunja Jabuka i cimet",
              engTitle: "",
            },
          ]
        },
        {
          title: "vina",
          engTitle: "",
          paragraphs: [
            {
              title: "Crveno vino 0,7l, Roze vino 0,7l, Belo vino 0,7l ( Vinarija Oplenac )",
              engTitle: "",
            },
          ]
        },
        {
          title: "pivo",
          engTitle: "",
          paragraphs: [
            {
              title: "Lav Premium 0,33l, Lav točeno 0,33l, Tuborg 0,33l",
              engTitle: "",
            },
          ]
        },
        {
          title: "voda",
          engTitle: "",
          paragraphs: [
            {
              title: "Knjaz Miloš gazirana, Aqua Viva negazirana",
              engTitle: "",
            },
          ]
        },
        {
          title: "sokovi",
          engTitle: "",
          paragraphs: [
            {
              title: "Coca-Cola, Coca-Cola Zero, Fanta, Bitter Lemon, Tonic Water, Sprite, Jabuka, Jagoda, Breskva, Đus",
              engTitle: "",
            },
          ]
        },
        {
          title: "ostala pića",
          engTitle: "",
          paragraphs: [
            {
              title: "Vermut, Vodka, Vinjak, Dzin, Pelinkovac",
              engTitle: "",
            },
          ]
        },
        {
          title: "kafa",
          engTitle: "",
          paragraphs: [
            {
              title: "Kafa domaća, Kafa espresso, Nes kafa",
              engTitle: "",
            },
          ]
        },
      ]
    },
    {
      title: "Predjelo",
      engTitle: "",
      category: "37",
      subTitle: [
        {
          title: "mesni proizvodi",
          engTitle: "",
          paragraphs: [
            {
              title: "Pršuta Njeguška, Svinjska pečenica, Goveđa pečenica, Kulen, Budimska",
              engTitle: "",
            }
          ]
        },
        {
          title: "sirevi",
          engTitle: "",
          paragraphs: [
            {
              title: "Kajmak, Mladi sir, Kačkavalj",
              engTitle: "",
            },
          ]
        },
        {
          title: "peciva",
          engTitle: "",
          paragraphs: [
            {
              title: "Proja, Pita sa mesom, Pita sa sirom",
              engTitle: "",
            },
          ]
        },
        {
          title: "dodaci",
          engTitle: "",
          paragraphs: [
            {
              title: "Masline",
              engTitle: "",
            }
          ]
        },
      ]
    },
    {
      title: "Salate",
      engTitle: "",
      category: "37",
      subTitle: [
        {
          title: "Ruska",
          engTitle: "",
        },
        {
          title: "Kupus salata",
          engTitle: "",
        },
        {
          title: "Sezonska",
          engTitle: "",
        },
      ]
    },
    {
      title: "Čorba",
      engTitle: "",
      category: "37",
      subTitle: [
        {
          title: "Teleća",
          engTitle: "",
        }
      ]
    },
    {
      title: "Međujelo",
      engTitle: "",
      category: "37",
      subTitle: [
        {
          title: "Sarmice od želja sa kiselim kupusom",
          engTitle: "",
        }
      ]
    },
    {
      title: "Glavno jelo",
      engTitle: "",
      category: "37",
      subTitle: [
        {
          title: "roštilj",
          engTitle: "",
          paragraphs: [
            {
              title: "Pljeskavica, Ćevapi, Vešalica, Pileće belo meso, Dimljeni vrat, Domaća kobasica, Pileći batak",
              engTitle: "",
            },
          ]
        },
        {
          title: "teleći medaljoni",
          engTitle: "",
          paragraphs: [
            {
              title: "Sa vrganjima i šampinjonima",
              engTitle: "",
            }
          ]
        },
        {
          title: "pohovana piletina",
          engTitle: "",
          paragraphs: [
            {
              title: "Sa susamom i tartat sosom",
              engTitle: "",
            }
          ]
        },
        {
          title: "ćuretina sa mlincima",
          engTitle: "",
        },
        {
          title: "prilog",
          engTitle: "",
          paragraphs: [
            {
              title: "Pekarski krompir",
              engTitle: "",
            }
          ]
        }
      ]
    },
    {
      title: "pećenje",
      engTitle: "",
      category: "37",
      subTitle: [
        {
          title: "Svinjsko pečenje",
          engTitle: "",
        },
        {
          title: "Jagnjeće pečenje",
          engTitle: "",
        },
      ]
    },
    {
      title: "Piće",
      engTitle: "",
      category: "37",
      subTitle: [
        {
          title: "rakije",
          engTitle: "",
          paragraphs: [
            {
              title: "Dunja, Kajsija, Šljiva, Loza, Viljamovka",
              engTitle: "",
            },
          ]
        },
        {
          title: "medene rakije",
          engTitle: "",
          paragraphs: [
            {
              title: "Malina, Dunja Jabuka i cimet",
              engTitle: "",
            },
          ]
        },
        {
          title: "vina",
          engTitle: "",
          paragraphs: [
            {
              title: "Crveno vino 0,7l, Roze vino 0,7l, Belo vino 0,7l ( Vinarija Oplenac )",
              engTitle: "",
            },
          ]
        },
        {
          title: "pivo",
          engTitle: "",
          paragraphs: [
            {
              title: "Lav Premium 0,33l, Lav točeno 0,33l, Tuborg 0,33l, Budweiser tamno 0,33l",
              engTitle: "",
            },
          ]
        },
        {
          title: "voda",
          engTitle: "",
          paragraphs: [
            {
              title: "Knjaz Miloš gazirana, Aqua Viva negazirana",
              engTitle: "",
            },
          ]
        },
        {
          title: "sokovi",
          engTitle: "",
          paragraphs: [
            {
              title: "Coca-Cola, Coca-Cola Zero, Fanta, Bitter Lemon, Tonic Water, Sprite, Jabuka, Jagoda, Breskva, Đus",
              engTitle: "",
            },
          ]
        },
        {
          title: "ostala pića",
          engTitle: "",
          paragraphs: [
            {
              title: "Vermut, Vodka, Vinjak, Dzin, Pelinkovac",
              engTitle: "",
            },
          ]
        },
        {
          title: "kafa",
          engTitle: "",
          paragraphs: [
            {
              title: "Kafa domaća, Kafa espresso, Nes kafa",
              engTitle: "",
            },
          ]
        },
      ]
    },
    {
      title: "Predjelo",
      engTitle: "",
      category: "45",
      subTitle: [
        {
          title: "mesni proizvodi",
          engTitle: "",
          paragraphs: [
            {
              title: "Pršuta Njeguška, Svinjska pečenica, Goveđa pečenica, Kulen, Budimska",
              engTitle: "",
            }
          ]
        },
        {
          title: "sirevi",
          engTitle: "",
          paragraphs: [
            {
              title: "Kajmak, Mladi sir, Kačkavalj",
              engTitle: "",
            },
          ]
        },
        {
          title: "peciva",
          engTitle: "",
          paragraphs: [
            {
              title: "Proja, Pita sa mesom, Pita sa sirom",
              engTitle: "",
            },
          ]
        },
        {
          title: "dodaci",
          engTitle: "",
          paragraphs: [
            {
              title: "Masline",
              engTitle: "",
            }
          ]
        },
      ]
    },
    {
      title: "Salate",
      engTitle: "",
      category: "45",
      subTitle: [
        {
          title: "Ruska",
          engTitle: "",
        },
        {
          title: "Kupus salata",
          engTitle: "",
        },
        {
          title: "Sezonska",
          engTitle: "",
        },
      ]
    },
    {
      title: "Čorba",
      engTitle: "",
      category: "45",
      subTitle: [
        {
          title: "Teleća",
          engTitle: "",
        }
      ]
    },
    {
      title: "Međujelo",
      engTitle: "",
      category: "45",
      subTitle: [
        {
          title: "Sarmice od želja sa kiselim kupusom",
          engTitle: "",
        }
      ]
    },
    {
      title: "Glavno jelo",
      engTitle: "",
      category: "45",
      subTitle: [
        {
          title: "roštilj",
          engTitle: "",
          paragraphs: [
            {
              title: "Pljeskavica, Ćevapi, Vešalica, Pileće belo meso, Dimljeni vrat, Domaća kobasica, Pileći batak",
              engTitle: "",
            },
          ]
        },
        {
          title: "teleći medaljoni",
          engTitle: "",
          paragraphs: [
            {
              title: "Sa vrganjima i šampinjonima",
              engTitle: "",
            }
          ]
        },
        {
          title: "ćuretina sa mlincima",
          engTitle: "",
        },
        {
          title: "prilog",
          engTitle: "",
          paragraphs: [
            {
              title: "Pekarski krompir",
              engTitle: "",
            }
          ]
        }
      ]
    },
    {
      title: "pećenje",
      engTitle: "",
      category: "45",
      subTitle: [
        {
          title: "Svinjsko pečenje",
          engTitle: "",
        },
        {
          title: "Jagnjeće pečenje",
          engTitle: "",
        },
      ]
    },
    {
      title: "Piće",
      engTitle: "",
      category: "45",
      subTitle: [
        {
          title: "rakije",
          engTitle: "",
          paragraphs: [
            {
              title: "Dunja, Kajsija, Šljiva, Loza, Viljamovka",
              engTitle: "",
            },
          ]
        },
        {
          title: "medene rakije",
          engTitle: "",
          paragraphs: [
            {
              title: "Malina, Dunja Jabuka i cimet",
              engTitle: "",
            },
          ]
        },
        {
          title: "vina",
          engTitle: "",
          paragraphs: [
            {
              title: "Crveno vino 0,7l, Roze vino 0,7l, Belo vino 0,7l ( Vinarija Oplenac )",
              engTitle: "",
            },
          ]
        },
        {
          title: "pivo",
          engTitle: "",
          paragraphs: [
            {
              title: "Lav Premium 0,33l, Lav točeno 0,33l, Tuborg 0,33l, Budweiser tamno 0,33l",
              engTitle: "",
            },
          ]
        },
        {
          title: "voda",
          engTitle: "",
          paragraphs: [
            {
              title: "Knjaz Miloš gazirana, Aqua Viva negazirana",
              engTitle: "",
            },
          ]
        },
        {
          title: "sokovi",
          engTitle: "",
          paragraphs: [
            {
              title: "Coca-Cola, Coca-Cola Zero, Fanta, Bitter Lemon, Tonic Water, Sprite, Jabuka, Jagoda, Breskva, Đus",
              engTitle: "",
            },
          ]
        },
        {
          title: "ostala pića",
          engTitle: "",
          paragraphs: [
            {
              title: "Vermut, Vodka, Vinjak, Dzin, Pelinkovac",
              engTitle: "",
            },
          ]
        },
        {
          title: "strana pića",
          engTitle: "",
          paragraphs: [
            {
              title: "Martini, Campari, Tequila, Ballantines, Jeger",
              engTitle: "",
            },
          ]
        },
        {
          title: "kafa",
          engTitle: "",
          paragraphs: [
            {
              title: "Kafa domaća, Kafa espresso, Nes kafa",
              engTitle: "",
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

  const { i18n } = useTranslation('')

  const [ category, setCategory ] = useState('32')
  const [ content, setContent ] = useState([])

  useEffect(() => {
    setContent(HallMenuData.filter(data => data.category === category))
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
    <div className="hall-menu-component">
        <div className="hall-menu-header fade-in">
          <HallMenuTab category={'32'} title={i18n.language === 'sr' ? "32€ po osobi" : "32€"} handleTabButton={setCategory} isActive={category === "32"} />
          <HallMenuTab category={'34'} title={i18n.language === 'sr' ? "34€ po osobi" : "34€"} handleTabButton={setCategory} isActive={category === "34"} />
          <HallMenuTab category={'37'} title={i18n.language === 'sr' ? "37€ po osobi" : "37€"} handleTabButton={setCategory} isActive={category === "37"} />
          <HallMenuTab category={'45'} title={i18n.language === 'sr' ? "45€ po osobi" : "45€"} handleTabButton={setCategory} isActive={category === "45"} />
        </div>
        <div className="hmc-content">
          <div className="hmc-container">
            <div className="hmc-wrap slide-in from-left">
              <div className="hmc-wrap-overlay"></div>
              <div className="hmc-img">
                <LazyLoadImage src={foodImg} alt="Slika hrane" />
              </div>`
              <div className={`hmc-scroll`}>
                <LazyLoadImage src={kosutaLogo} alt="Logo sajta" />
              </div>
            </div>
            <div className="hmc-menu">
              {
                content.map((item , index) => (
                  <div className='hmc-menu-title' key={`${category}-${index}`}>
                    <h1 className='slide-in from-left'>{i18n.language === 'sr' ? item.title : item.engTitle}</h1>
                    <div className="hmc-menu2">
                      {
                        item.subTitle.map((subTitle, subIndex) => (
                          <div className='hmc-menu-sub' key={subIndex}>
                            <h3 className='slide-in from-left'>{i18n.language === 'sr' ? subTitle.title : subTitle.engTitle}</h3>
                            <div className="hmc-menu3">
                              {
                                subTitle.paragraphs && subTitle.paragraphs.length > 0 &&
                                subTitle.paragraphs.map((paragraph, parIndex) => (
                                  <div key={parIndex}>
                                    <p className='slide-in from-left'>{i18n.language === 'sr' ? paragraph.title : paragraph.engTitle}</p>
                                  </div>
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
            </div>
          </div>
        </div>
    </div>
  )
}

export default HallMenuComponent
import React, { useEffect, useState } from 'react'
import './hall-menu-component.css'
import foodImg from '../../../../Assets/Hall/foodImg.jpg'
import kosutaLogo from '../../../../Assets/kosutaLogo.png'

const HallMenuData = [
    {
      title: "Predjelo",
      category: "32",
      subTitle: [
        {
          title: "mesni proizvodi",
          paragraphs: [
            {
              title: "Pršuta Njeguška, Svinjska pečenica, Goveđa pečenica, Kulen, Budimska"
            }
          ]
        },
        {
          title: "sirevi",
          paragraphs: [
            {
              title: "Kajmak, Mladi sir, Kačkavalj"
            },
          ]
        },
        {
          title: "peciva",
          paragraphs: [
            {
              title: "Proja, Pita sa mesom, Pita sa sirom"
            },
          ]
        },
        {
          title: "dodaci",
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
          title: "roštilj",
          paragraphs: [
            {
              title: "Pljeskavica, Ćevapi, Vešalica, Pileće belo meso, Dimljeni vrat, Domaća kobasica, Pileći batak"
            },
          ]
        },
        {
          title: "prilog",
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
          title: "rakije",
          paragraphs: [
            {
              title: "Dunja, Kajsija, Šljiva, Loza, Viljamovka"
            },
          ]
        },
        {
          title: "vina",
          paragraphs: [
            {
              title: "Crveno vino 0,7l, Roze vino 0,7l, Belo vino 0,7l ( Vinarija Oplenac )"
            },
          ]
        },
        {
          title: "pivo",
          paragraphs: [
            {
              title: "Lav Premium 0,33l, Lav točeno 0,33l"
            },
          ]
        },
        {
          title: "voda",
          paragraphs: [
            {
              title: "Knjaz Miloš gazirana, Aqua Viva negazirana"
            },
          ]
        },
        {
          title: "sokovi",
          paragraphs: [
            {
              title: "Coca-Cola, Coca-Cola Zero, Fanta, Bitter Lemon, Tonic Water, Sprite, Jabuka, Jagoda, Breskva, Đus"
            },
          ]
        },
        {
          title: "ostala pića",
          paragraphs: [
            {
              title: "Vermut, Vodka, Vinjak, Dzin, Pelinkovac"
            },
          ]
        },
        {
          title: "kafa",
          paragraphs: [
            {
              title: "Kafa domaća, Kafa espresso, Nes kafa"
            },
          ]
        },
      ]
    },
    {
      title: "Predjelo",
      category: "34",
      subTitle: [
        {
          title: "mesni proizvodi",
          paragraphs: [
            {
              title: "Pršuta Njeguška, Svinjska pečenica, Goveđa pečenica, Kulen, Budimska"
            }
          ]
        },
        {
          title: "sirevi",
          paragraphs: [
            {
              title: "Kajmak, Mladi sir, Kačkavalj"
            },
          ]
        },
        {
          title: "peciva",
          paragraphs: [
            {
              title: "Proja, Pita sa mesom, Pita sa sirom"
            },
          ]
        },
        {
          title: "dodaci",
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
      category: "34",
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
      category: "34",
      subTitle: [
        {
          title: "Teleća"
        }
      ]
    },
    {
      title: "Međujelo",
      category: "34",
      subTitle: [
        {
          title: "Sarmice od želja sa kiselim kupusom"
        }
      ]
    },
    {
      title: "Glavno jelo",
      category: "34",
      subTitle: [
        {
          title: "roštilj",
          paragraphs: [
            {
              title: "Pljeskavica, Ćevapi, Vešalica, Pileće belo meso, Dimljeni vrat, Domaća kobasica, Pileći batak"
            },
          ]
        },
        {
          title: "teleći medaljoni",
          paragraphs: [
            {
              title: "Sa vrganjima i šampinjonima"
            }
          ]
        },
        {
          title: "pohovana piletina",
          paragraphs: [
            {
              title: "Sa susamom i tartat sosom"
            }
          ]
        },
        {
          title: "prilog",
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
      category: "34",
      subTitle: [
        {
          title: "rakije",
          paragraphs: [
            {
              title: "Dunja, Kajsija, Šljiva, Loza, Viljamovka"
            },
          ]
        },
        {
          title: "medene rakije",
          paragraphs: [
            {
              title: "Malina, Dunja Jabuka i cimet"
            },
          ]
        },
        {
          title: "vina",
          paragraphs: [
            {
              title: "Crveno vino 0,7l, Roze vino 0,7l, Belo vino 0,7l ( Vinarija Oplenac )"
            },
          ]
        },
        {
          title: "pivo",
          paragraphs: [
            {
              title: "Lav Premium 0,33l, Lav točeno 0,33l, Tuborg 0,33l"
            },
          ]
        },
        {
          title: "voda",
          paragraphs: [
            {
              title: "Knjaz Miloš gazirana, Aqua Viva negazirana"
            },
          ]
        },
        {
          title: "sokovi",
          paragraphs: [
            {
              title: "Coca-Cola, Coca-Cola Zero, Fanta, Bitter Lemon, Tonic Water, Sprite, Jabuka, Jagoda, Breskva, Đus"
            },
          ]
        },
        {
          title: "ostala pića",
          paragraphs: [
            {
              title: "Vermut, Vodka, Vinjak, Dzin, Pelinkovac"
            },
          ]
        },
        {
          title: "kafa",
          paragraphs: [
            {
              title: "Kafa domaća, Kafa espresso, Nes kafa"
            },
          ]
        },
      ]
    },
    {
      title: "Predjelo",
      category: "37",
      subTitle: [
        {
          title: "mesni proizvodi",
          paragraphs: [
            {
              title: "Pršuta Njeguška, Svinjska pečenica, Goveđa pečenica, Kulen, Budimska"
            }
          ]
        },
        {
          title: "sirevi",
          paragraphs: [
            {
              title: "Kajmak, Mladi sir, Kačkavalj"
            },
          ]
        },
        {
          title: "peciva",
          paragraphs: [
            {
              title: "Proja, Pita sa mesom, Pita sa sirom"
            },
          ]
        },
        {
          title: "dodaci",
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
      category: "37",
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
      category: "37",
      subTitle: [
        {
          title: "Teleća"
        }
      ]
    },
    {
      title: "Međujelo",
      category: "37",
      subTitle: [
        {
          title: "Sarmice od želja sa kiselim kupusom"
        }
      ]
    },
    {
      title: "Glavno jelo",
      category: "37",
      subTitle: [
        {
          title: "roštilj",
          paragraphs: [
            {
              title: "Pljeskavica, Ćevapi, Vešalica, Pileće belo meso, Dimljeni vrat, Domaća kobasica, Pileći batak"
            },
          ]
        },
        {
          title: "teleći medaljoni",
          paragraphs: [
            {
              title: "Sa vrganjima i šampinjonima"
            }
          ]
        },
        {
          title: "pohovana piletina",
          paragraphs: [
            {
              title: "Sa susamom i tartat sosom"
            }
          ]
        },
        {
          title: "ćuretina sa mlincima",
        },
        {
          title: "prilog",
          paragraphs: [
            {
              title: "Pekarski krompir"
            }
          ]
        }
      ]
    },
    {
      title: "pećenje",
      category: "37",
      subTitle: [
        {
          title: "Svinjsko pečenje"
        },
        {
          title: "Jagnjeće pečenje"
        },
      ]
    },
    {
      title: "Piće",
      category: "37",
      subTitle: [
        {
          title: "rakije",
          paragraphs: [
            {
              title: "Dunja, Kajsija, Šljiva, Loza, Viljamovka"
            },
          ]
        },
        {
          title: "medene rakije",
          paragraphs: [
            {
              title: "Malina, Dunja Jabuka i cimet"
            },
          ]
        },
        {
          title: "vina",
          paragraphs: [
            {
              title: "Crveno vino 0,7l, Roze vino 0,7l, Belo vino 0,7l ( Vinarija Oplenac )"
            },
          ]
        },
        {
          title: "pivo",
          paragraphs: [
            {
              title: "Lav Premium 0,33l, Lav točeno 0,33l, Tuborg 0,33l, Budweiser tamno 0,33l"
            },
          ]
        },
        {
          title: "voda",
          paragraphs: [
            {
              title: "Knjaz Miloš gazirana, Aqua Viva negazirana"
            },
          ]
        },
        {
          title: "sokovi",
          paragraphs: [
            {
              title: "Coca-Cola, Coca-Cola Zero, Fanta, Bitter Lemon, Tonic Water, Sprite, Jabuka, Jagoda, Breskva, Đus"
            },
          ]
        },
        {
          title: "ostala pića",
          paragraphs: [
            {
              title: "Vermut, Vodka, Vinjak, Dzin, Pelinkovac"
            },
          ]
        },
        {
          title: "kafa",
          paragraphs: [
            {
              title: "Kafa domaća, Kafa espresso, Nes kafa"
            },
          ]
        },
      ]
    },
    {
      title: "Predjelo",
      category: "45",
      subTitle: [
        {
          title: "mesni proizvodi",
          paragraphs: [
            {
              title: "Pršuta Njeguška, Svinjska pečenica, Goveđa pečenica, Kulen, Budimska"
            }
          ]
        },
        {
          title: "sirevi",
          paragraphs: [
            {
              title: "Kajmak, Mladi sir, Kačkavalj"
            },
          ]
        },
        {
          title: "peciva",
          paragraphs: [
            {
              title: "Proja, Pita sa mesom, Pita sa sirom"
            },
          ]
        },
        {
          title: "dodaci",
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
      category: "45",
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
      category: "45",
      subTitle: [
        {
          title: "Teleća"
        }
      ]
    },
    {
      title: "Međujelo",
      category: "45",
      subTitle: [
        {
          title: "Sarmice od želja sa kiselim kupusom"
        }
      ]
    },
    {
      title: "Glavno jelo",
      category: "45",
      subTitle: [
        {
          title: "roštilj",
          paragraphs: [
            {
              title: "Pljeskavica, Ćevapi, Vešalica, Pileće belo meso, Dimljeni vrat, Domaća kobasica, Pileći batak"
            },
          ]
        },
        {
          title: "teleći medaljoni",
          paragraphs: [
            {
              title: "Sa vrganjima i šampinjonima"
            }
          ]
        },
        {
          title: "ćuretina sa mlincima",
        },
        {
          title: "prilog",
          paragraphs: [
            {
              title: "Pekarski krompir"
            }
          ]
        }
      ]
    },
    {
      title: "pećenje",
      category: "45",
      subTitle: [
        {
          title: "Svinjsko pečenje"
        },
        {
          title: "Jagnjeće pečenje"
        },
      ]
    },
    {
      title: "Piće",
      category: "45",
      subTitle: [
        {
          title: "rakije",
          paragraphs: [
            {
              title: "Dunja, Kajsija, Šljiva, Loza, Viljamovka"
            },
          ]
        },
        {
          title: "medene rakije",
          paragraphs: [
            {
              title: "Malina, Dunja Jabuka i cimet"
            },
          ]
        },
        {
          title: "vina",
          paragraphs: [
            {
              title: "Crveno vino 0,7l, Roze vino 0,7l, Belo vino 0,7l ( Vinarija Oplenac )"
            },
          ]
        },
        {
          title: "pivo",
          paragraphs: [
            {
              title: "Lav Premium 0,33l, Lav točeno 0,33l, Tuborg 0,33l, Budweiser tamno 0,33l"
            },
          ]
        },
        {
          title: "voda",
          paragraphs: [
            {
              title: "Knjaz Miloš gazirana, Aqua Viva negazirana"
            },
          ]
        },
        {
          title: "sokovi",
          paragraphs: [
            {
              title: "Coca-Cola, Coca-Cola Zero, Fanta, Bitter Lemon, Tonic Water, Sprite, Jabuka, Jagoda, Breskva, Đus"
            },
          ]
        },
        {
          title: "ostala pića",
          paragraphs: [
            {
              title: "Vermut, Vodka, Vinjak, Dzin, Pelinkovac"
            },
          ]
        },
        {
          title: "strana pića",
          paragraphs: [
            {
              title: "Martini, Campari, Tequila, Ballantines, Jeger"
            },
          ]
        },
        {
          title: "kafa",
          paragraphs: [
            {
              title: "Kafa domaća, Kafa espresso, Nes kafa"
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
          <div className="hmc-container">
            <div className="hmc-wrap">
              <div className="hmc-wrap-overlay"></div>
              <div className="hmc-img">
                <img src={foodImg} alt="Slika hrane" />
              </div>`
              <div className={`hmc-scroll`}>
                <img src={kosutaLogo} alt="Logo sajta" />
              </div>
            </div>
            <div className="hmc-menu">
              {
                content.map((item , index) => (
                  <div className='hmc-menu-title' key={index}>
                    <h1>{item.title}</h1>
                    <div className="hmc-menu2">
                      {
                        item.subTitle.map((subTitle, subIndex) => (
                          <div className='hmc-menu-sub' key={subIndex}>
                            <h3>{subTitle.title}</h3>
                            <div className="hmc-menu3">
                              {
                                subTitle.paragraphs && subTitle.paragraphs.length > 0 &&
                                subTitle.paragraphs.map((paragraph, parIndex) => (
                                  <div key={parIndex}>
                                    <p>{paragraph.title}</p>
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
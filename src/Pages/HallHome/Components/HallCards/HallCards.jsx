import React, { useEffect, useRef, useState } from 'react';
import gardenImg from '../../../../Assets/Restaurant/restaurantGarden13.jpg';
import gameroomImg from '../../../../Assets/Hall/gameroom.jpg'
import parkingImg from '../../../../Assets/Hall/parking.jpg'
import './hall-cards.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTranslation } from 'react-i18next';

const CardsData = [
    {
        id: 1,
        firstTitle: "Košuta",
        firstEngTitle: "",
        secondTitle: "Garden",
        secondEngTitle: "",
        firstDesc: "MAJ - SEPTEMBAR",
        firstEngDesc: "",
        secondDesc: "KAPACITET: 200",
        secondEngDesc: "",
        title: "Košuta Garden",
        engTitle: "",
        image: gardenImg
    },
    {
        id: 2,
        firstTitle: "Igralište",
        firstEngTitle: "",
        secondEngTitle: "",
        secondTitle: "za decu",
        // firstDesc: "MAJ - SEPTEMBAR",
        // firstEngDesc: "",
        secondDesc: "KAPACITET: 200",
        secondEngDesc: "",
        title: "Igralište za decu",
        engTitle: "",
        image: gameroomImg
    },
    {
        id: 3,
        firstTitle: "24 parking",
        firstEngTitle: "",
        secondTitle: "mesta",
        secondEngTitle: "",
        // firstDesc: "MAJ - SEPTEMBAR",
        // firstEngDesc: "",
        secondDesc: "KAPACITET: 24",
        secondEngDesc: "",
        title: "24 parking mesta",
        engTitle: "",
        image: parkingImg
    },
]

const HallCards = () => {
  const { i18n } = useTranslation('')
  const [activeCard, setActiveCard] = useState(0);
  const hallCardsRef = useRef([]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const cardOffsets = hallCardsRef.current.map((card) => card.offsetTop);
    const middleOfViewport = window.innerHeight / 2 + scrollPosition;

    let activeCardIndex = 0;
    for (let i = cardOffsets.length - 1; i >= 0; i--) {
      if (middleOfViewport >= cardOffsets[i]) {
        activeCardIndex = i;
        break;
      }
    }

    setActiveCard(activeCardIndex);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="hall-cards">
      {CardsData.map((_, index) => (
        <div
          key={index}
          ref={(el) => (hallCardsRef.current[index] = el)}
          className={`hall-card ${activeCard === index ? 'active' : 'inactive'}`}
        >
          <LazyLoadImage src={_.image} alt="Slika bašte" />
          <div className="hall-card-text">
            <h1>
              <span>{i18n.language === 'sr' ? _.firstTitle : _.firstEngTitle}</span> <span>{i18n.language === 'sr' ? _.secondTitle : _.secondEngTitle}</span>
            </h1>
            {
              i18n.language === 'sr' ? (
                _.firstDesc && (
                  <p className="hct-may">{_.firstDesc}</p>
              )
              ) : (
                _.firstEngDesc && (
                  <p className='hct-may'>{_.firstEngDesc}</p>
                )
              )
            }
            <p className="hct-cap">{i18n.language === 'sr' ? _.secondDesc : _.secondEngDesc}</p>
          </div>
          <div className="hct-main"><h1>{i18n.language === 'sr' ? _.title : _.engTitle}</h1></div>
          <div className="hct-overlay"></div>
        </div>
      ))}
    </div>
  );
};

export default HallCards;
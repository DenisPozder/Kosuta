import React, { useEffect, useRef, useState } from 'react';
import gardenImg from '../../../../Assets/Restaurant/restaurantGarden13.jpg';
import gameroomImg from '../../../../Assets/Hall/gameroom.jpg'
import parkingImg from '../../../../Assets/Hall/parking.jpg'
import './hall-cards.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const CardsData = [
    {
        id: 1,
        firstTitle: "Košuta",
        secondTitle: "Garden",
        firstDesc: "MAJ - SEPTEMBAR",
        secondDesc: "KAPACITET: 200",
        title: "Košuta Garden",
        image: gardenImg
    },
    {
        id: 2,
        firstTitle: "Igralište",
        secondTitle: "za decu",
        // firstDesc: "MAJ - SEPTEMBAR",
        secondDesc: "KAPACITET: 200",
        title: "Igralište za decu",
        image: gameroomImg
    },
    {
        id: 3,
        firstTitle: "24 parking",
        secondTitle: "mesta",
        // firstDesc: "MAJ - SEPTEMBAR",
        secondDesc: "KAPACITET: 24",
        title: "24 parking mesta",
        image: parkingImg
    },
]

const HallCards = () => {
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
              <span>{_.firstTitle}</span> <span>{_.secondTitle}</span>
            </h1>
            {
                _.firstDesc && (
                    <p className="hct-may">{_.firstDesc}</p>
                )
            }
            <p className="hct-cap">{_.secondDesc}</p>
          </div>
          <div className="hct-main"><h1>{_.title}</h1></div>
          <div className="hct-overlay"></div>
        </div>
      ))}
    </div>
  );
};

export default HallCards;
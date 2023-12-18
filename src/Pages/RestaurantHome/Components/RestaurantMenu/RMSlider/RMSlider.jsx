import React, { useEffect, useState } from 'react'
import './rm-slider.css'
import restaurantImage from '../../../../../Assets/Restaurant/restaurantMealImg.jpg'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { MdDinnerDining } from "react-icons/md";
import mealImg1 from '../../../../../Assets/Restaurant/meal1.jpg'
import mealImg2 from '../../../../../Assets/Restaurant/meal2.jpg'
import mealImg3 from '../../../../../Assets/Restaurant/meal3.jpg'
import mealImg4 from '../../../../../Assets/Restaurant/meal4.jpg'

const slideWidth = 280;

const _items = [
    {
        meal: {
            title: "Njeguška Pršuta",
            desc: "Njeguška Pršuta, tradicionalni crnogorski delikates, predstavlja vrhunski sušeni i dimljeni pršut koji potiče iz sela Njeguši",
            image: mealImg1
        }
    },
    {
        meal: {
            title: "Pljeskavica",
            desc: "Pljeskavica je sočni mesni burger pripremljena od pažljivo odabrane mešavine mlevenog mesa, često kombinujući junetinu i svinjetinu.",
            image: mealImg2
        }
    },
    {
        meal: {
            title: "Pileći file na žaru",
            desc: "Pileći file na žaru je ukusno jelo koje se priprema od sočnih pilećih fileta pečenih na roštilju. Fileti se obično pripremaju u začinima.",
            image: mealImg3
        }
    },
    {
        meal: {
            title: "Bečka šnicla",
            desc: "Bečka šnicla poznata i kao Bečki odrezak, je klasik austrijske kuhinje i jedno od najpoznatijih jela svetske kuhinje",
            image: mealImg4
        }
    },
]

const length = _items.length
_items.push(..._items)

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}px)`,
        },
        meal: _items[idx].meal,
    };

    switch (position) {
        case length - 1:
            item.styles = {...item.styles, height: '320px', top: '30px', left: '140px', opacity: ".6"};
            break
        case length + 1:
            item.styles = {...item.styles, height: '320px', top: '30px', left: "-140px", opacity: ".6"};
            break;
        case length:
            item.styles = {...item.styles, zIndex: '2'}
            break;
        default:
            item.styles = {...item.styles, opacity: 0, height: "320px", top: '30px'};
            break;
    }

    return item;
};

const RMItem = ({pos, idx, activeIdx}) => {
    const item = createItem(pos, idx, activeIdx)

    return (
        <div className="rm-item" style={item.styles}>
            <div className="rm-item-inner">
            <div className="rm-item-top">
                <img src={item.meal.image} alt="" />
            </div>
            <div className="rm-item-bottom">
                <div className="rm-itemb-text">
                    <h1><MdDinnerDining /><span>{item.meal.title}</span></h1>
                    <p>{item.meal.desc}</p>
                </div>
            </div>
            </div>
        </div>
    )
}

const keys = Array.from(Array(_items.length).keys());

const RMSlider = () => {
    const [items, setItems] = useState(keys);
    const [isTicking, setIsTicking] = useState(false);
    const [activeIdx, setActiveIdx] = useState(0);
    const bigLength = items.length;

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };

    useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length)
    }, [items]);

  return (
    <div className="rm-slider-wrap-carousel">
        <div className="rm-slider-inner-carousel">
            <div className="rm-slider-container-carousel">
                <button className='rm-carousel-btn rm-carousel-prev' onClick={() => prevClick()}><AiOutlineLeft /></button>
                <div className="rm-slider-carousel-list">
                    {
                        items.map((pos, i) => (
                            <RMItem idx={i} key={i} pos={pos} />
                        ))
                    }
                </div>
                <button className='rm-carousel-btn rm-carousel-next' onClick={() => nextClick()}><AiOutlineRight /></button>
            </div>
        </div>
    </div>
  )
}

export default RMSlider
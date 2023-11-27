import React, { useEffect, useState } from 'react'
import './rm-slider.css'
import restaurantImage from '../../../../../Assets/Restaurant/restaurantMealImg.jpg'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const slideWidth = 280;

const _items = [
    {
        meal: {
            title: "Prvo Jelo",
            desc: "Some simple desc goes right here",
            image: restaurantImage
        }
    },
    {
        meal: {
            title: "Drugo Jelo",
            desc: "Some simple desc goes right here",
            image: restaurantImage
        }
    },
    {
        meal: {
            title: "Treće Jelo",
            desc: "Some simple desc goes right here",
            image: restaurantImage
        }
    },
    {
        meal: {
            title: "Četvrto Jelo",
            desc: "Some simple desc goes right here",
            image: restaurantImage
        }
    },
    {
        meal: {
            title: "Peto Jelo",
            desc: "Some simple desc goes right here",
            image: restaurantImage
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
                <h1>{item.meal.title}</h1>
                <p>{item.meal.desc}</p>
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
    <div className="rm-slider-wrap">
        <div className="rm-slider-inner">
            <div className="rm-slider-container">
                <button className='rm-slider-btn rm-slider-prev' onClick={() => prevClick()}><AiOutlineLeft /></button>
                <div className="rm-slider-list">
                    {
                        items.map((pos, i) => (
                            <RMItem idx={i} key={i}  pos={pos} />
                        ))
                    }
                </div>
                <button className='rm-slider-btn rm-slider-next' onClick={() => nextClick()}><AiOutlineRight /></button>
            </div>
        </div>
    </div>
  )
}

export default RMSlider
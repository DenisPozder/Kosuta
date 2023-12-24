import React, { useEffect } from "react";
import HallLayout from "../../Layout/HallLayout/HallLayout";
import HallHero from "./Components/HallHero/HallHero";
import HallSliderTextLayout from "../../Components/HallSliderTextLayout/HallSliderTextLayout";
import hall1 from "../../Assets/Hall/hall1.jpg";
import HallCards from "./Components/HallCards/HallCards";
import HallText from "./Components/HallText/HallText";
import kamin1Img from "../../Assets/Hall/kamin1.jpg";
import kamin2Img from "../../Assets/Hall/kamin14.jpg";
import kamin3Img from "../../Assets/Hall/kamin17.jpg";
import kamin4Img from "../../Assets/Hall/kamin24.jpg";
import kamin5Img from "../../Assets/Hall/kamin29.jpg";
import kamin6Img from "../../Assets/Hall/kamin35.jpg";
import kamin7Img from "../../Assets/Hall/kamin46.jpg";
import svecana1Img from "../../Assets/Hall/svecana1.jpg";
import svecana2Img from "../../Assets/Hall/svecana15.jpg";
import svecana3Img from "../../Assets/Hall/svecana26.jpg";
import svecana4Img from "../../Assets/Hall/svecana29.jpg";
import svecana5Img from "../../Assets/Hall/svecana39.jpg";
import svecana6Img from "../../Assets/Hall/svecana59.jpg";
import svecana7Img from "../../Assets/Hall/svecana68.jpg";
import HelmetContent from "../../Layout/HelmerContent";
import grande1 from '../../Assets/Hall/grande1.jpg'
import grande2 from '../../Assets/Hall/grande16.jpg'
import grande3 from '../../Assets/Hall/grande31.jpg'
import grande4 from '../../Assets/Hall/grande34.jpg'
import grande5 from '../../Assets/Hall/grande45.jpg'
import grande6 from '../../Assets/Hall/grande51.jpg'
import grande7 from '../../Assets/Hall/grande83.jpg'

const HallData = [
  {
    title1: "Sala",
    engTitle1: "Event hall",
    title2: "Grande",
    engTitle2: "Grande",
    engDesc:
      "The 'Grande' Hall provides an elegant space. With its luxurious interior decorated with warm tones and natural decorations, the hall creates a hospitable atmosphere for different occasions, from weddings to corporate gatherings.",
    desc: "Sala 'Grande' pruža elegantan prostor koji sa svojim raskošnim enterijerom ukrašenim toplim tonovima i prirodnim dekoracijama, dvorana stvara gostoljubivu atmosferu za različita prilike, od venčanja do korporativnik okupljanja.",
    images: [
      {
        image: grande1,
      },
      {
        image: grande2,
      },
      {
        image: grande3,
      },
      {
        image: grande4,
      },
      {
        image: grande5,
      },
      {
        image: grande6,
      },
      {
        image: grande7,
      },
    ],
    layout: "left",
    capacity: "200 - 400",
    autoplayDuration: 8000,
    link: "/rezervacije",
  },
  {
    title1: "Svečana",
    engTitle1: "The ceremonial",
    title2: "Sala",
    engTitle2: "Hall",
    engDesc:
      "The ceremonial hall provides a pleasant space. With its luxurious interior and floor decorations provides a suitable environment for all types of gatherings with a limited number of guests.",
    desc: "Svečana sala pruža ugodan prostor koji se svojim raskošnim enterijerom i pripodnim dekoracijama pruža prikladno okruženje za sve vrste okupljanja sa ograničenim brojem gostiju.",
    images: [
      {
        image: svecana1Img,
      },
      {
        image: svecana2Img,
      },
      {
        image: svecana3Img,
      },
      {
        image: svecana4Img,
      },
      {
        image: svecana5Img,
      },
      {
        image: svecana6Img,
      },
      {
        image: svecana7Img,
      },
    ],
    layout: "right",
    capacity: "100 - 170",
    autoplayDuration: 6000,
    link: "/rezervacije",
  },
  {
    title1: "Kamin",
    engTitle1: "Fireplace",
    title2: "Sala",
    engTitle2: "Hall",
    engDesc:
      "Fireplace Hall, our celebratory gem, provides a unique experience in the heart of our haven. With the warmth of the fireplace, modern equipment and comfortable furniture, we create unforgettable moments for all events. Your special moments are in safe hands with us.",
    desc: "Kamin sala, naš dragulj za proslave, pruža jedinstveno iskustvo u srcu naše destinacije. Sa toplinom kamina, modernom opremom i udobnim nameštajem, stvaramo nezaboravne trenutke za različite događaje. Vaši specijalni momenti su kod nas u sigurnim rukama.",
    images: [
      {
        image: kamin1Img,
      },
      {
        image: kamin2Img,
      },
      {
        image: kamin3Img,
      },
      {
        image: kamin4Img,
      },
      {
        image: kamin5Img,
      },
      {
        image: kamin6Img,
      },
      {
        image: kamin7Img,
      },
    ],
    layout: "left",
    capacity: "80",
    autoplayDuration: 8000,
    link: "/rezervacije",
  },
];

const HallHome = () => {
  /*----- Intersection Observer -----*/
  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in");
    const sliders = document.querySelectorAll(".slide-in");

    const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -200px 0px",
    };

    const appearOnScroll = new IntersectionObserver(function (
      entries,
      appearOnScroll
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear");
          appearOnScroll.unobserve(entry.target);
        }
      });
    },
    appearOptions);

    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });

    sliders.forEach((slider) => {
      appearOnScroll.observe(slider);
    });
  }, []);

  useEffect(() => {
    const parallax_el = document.querySelectorAll(".parallax");
    let xValue = 0,
      yValue = 0;

    let rotateDegree = 0;

    function update(cursorPosition) {
      parallax_el.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotation = el.dataset.rotation;

        let isInLeft =
          parseFloat(getComputedStyle(el).left) < window.innerWidth / 2
            ? 1
            : -1;
        let zValue =
          (cursorPosition - parseFloat(getComputedStyle(el).left)) *
          isInLeft *
          0.1;

        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px))
            translateY(calc(-50% + ${yValue * speedy}px))
            rotateY(${rotateDegree * rotation}deg)
            perspective(2300px)
            translateZ(${zValue * speedz}px)`;
      });
    }

    update(0);

    window.addEventListener("mousemove", (e) => {
      xValue = e.clientX - window.innerWidth / 2;
      yValue = e.clientY - window.innerHeight / 2;

      rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

      update(e.clientX);
    });
  }, []);

  return (
    <>
      <HelmetContent
        title={"Košuta proslave - Sale"}
        description={
          "Ušuškan unutar bujnog zagrljaja visokih četinara, Košuta nudi jedinstvenu fuziju modernog ambijenta i detalja prirode. Potopite svoje događaje u neuporedivu lepotu ovog prostora, gde se raskoš susreće s spokojem prirode"
        }
        keywords={
          "sale, sala, izdavanje sala, izdavanje sale, rođendani, seminari, venčanja, sve vrste proslava, kamin, grande, svečana sala, kamin sala, sala grande"
        }
        canonical={""}
      />
      <HallLayout>
        <section className="page-section">
          <HallHero />
          {HallData.map((hall, index) => (
            <HallSliderTextLayout key={index} {...hall} />
          ))}
          <HallText />
          <HallCards />
        </section>
      </HallLayout>
    </>
  );
};

export default HallHome;

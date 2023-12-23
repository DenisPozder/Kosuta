import React, { useEffect } from "react";
import RestaurantLayout from "../../Layout/RestaurantLayout/RestaurantLayout";
import RGComponent from "./Components/RGComponent/RGComponent";
import HelmetContent from "../../Layout/HelmerContent";

const RestaurantGallery = () => {
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

  return (
    <>
      <HelmetContent
        title={"Galerija restorana"}
        description={
          "Dobrodošli u virtualnu šetnju kroz našu gastronomsku oazu - galeriju restorana Košuta. Uživajte u prikazu naših elegantno uređenih prostorija, atmosfere koja priziva toplinu i gostoljubivost, te svih trenutaka koji čine posetu našem restoranu nezaboravnom."
        }
        keywords={
          "restoran, jelo, jela, piće, pića, jelovnik, meni, početna, košuta restoran, restoran košuta, galerija, slike, slika, kolekcija, bašta"
        }
        canonical={""}
      />
      <RestaurantLayout>
        <section className="page-section">
          <RGComponent />
        </section>
      </RestaurantLayout>
    </>
  );
};

export default RestaurantGallery;

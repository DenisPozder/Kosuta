import React, { useEffect } from "react";
import HallLayout from "../../Layout/HallLayout/HallLayout";
import AllHallsHero from "./Components/AllHallsHero/AllHallsHero";
import AllHallsTabs from "./Components/AllHallsTabs/AllHallsTabs";
import HelmetContent from "../../Layout/HelmerContent";

const AllHallsPage = () => {
  return (
    <>
      <HelmetContent
        title={"Sve sale"}
        description={
          "Pogledajte sve naše sale, i odaberite pravu salu za vaš poseban dan. Na raspolaganju su vam sale sa kapacitetom od 80 do 400 gostiju, sa prilagodljivim menijima, sve u zavisnosti od vaših potreba."
        }
        keywords={
          "sale, sala, izdavanje sala, izdavanje sale, rođendani, seminari, venčanja, sve vrste proslava, kamin, grande, svečana sala, kamin sala, sala grande, bašta"
        }
        canonical={""}
      />
      <HallLayout>
        <section className="page-section">
          <AllHallsHero />
          <AllHallsTabs />
        </section>
      </HallLayout>
    </>
  );
};

export default AllHallsPage;

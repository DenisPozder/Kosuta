import React from "react";
import LandingComponent from "./Components/LandingComponent/LandingComponent";
import LanguageSwitcher from "../../Components/LanguageSwitcher/LanguageSwitcher";
import HelmetContent from "../../Layout/HelmerContent";

const Landing = () => {
  return (
    <>
      <HelmetContent
        title={"Dobrodošli u Košutu"}
        description={
          "Ušuškan unutar bujnog zagrljaja visokih četinara, Košuta nudi jedinstvenu fuziju modernog ambijenta i detalja prirode. Potopite svoje događaje u neuporedivu lepotu ovog prostora, gde se raskoš susreće s spokojem prirode"
        }
        keywords={
          "sale, sala, izdavanje sala, izdavanje sale, rođendani, seminari, venčanja, sve vrste proslava, kamin, grande, svečana sala, kamin sala, sala grande, restoran, meni, jelovnik, galerija, slike, slika, jela, jelo, deserti, supa, supe, desert, predjelo, glavno jelo, pića, piće"
        }
        canonical={""}
      />
      <section className="page-section">
        <LanguageSwitcher isLandingPage={true} />
        <LandingComponent />
      </section>
    </>
  );
};

export default Landing;

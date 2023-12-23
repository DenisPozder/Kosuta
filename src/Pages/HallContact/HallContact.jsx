import React from "react";
import HallLayout from "../../Layout/HallLayout/HallLayout";
import ContactComponent from "./Components/ContactComponent/ContactComponent";
import HelmetContent from "../../Layout/HelmerContent";

const HallContact = () => {
  return (
    <>
      <HelmetContent
        title={"Kontakt"}
        description={
          "Ukoliko imate neka pitanja, sugestije, pohvale ili kritike, možete nam se javiti putem telefona ili email adrese koji su naznačeni u nastavku."
        }
        keywords={
          "sale, sala, izdavanje sala, izdavanje sale, rođendani, seminari, venčanja, sve vrste proslava, kamin, grande, svečana sala, kamin sala, sala grande"
        }
        canonical={""}
      />
      <HallLayout>
        <section className="page-section">
          <ContactComponent />
        </section>
      </HallLayout>
    </>
  );
};

export default HallContact;

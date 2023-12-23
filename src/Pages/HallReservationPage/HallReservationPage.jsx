import React from "react";
import HallLayout from "../../Layout/HallLayout/HallLayout";
import HRPComponent from "./Components/HRPComponent/HRPComponent";
import HelmetContent from "../../Layout/HelmerContent";

const HallReservationPage = () => {
  return (
    <>
      <HelmetContent
        title={"Rezervišite salu"}
        description={
          "Rezervišite ekskluzivnu salu za svoj poseban događaj direktno na našem web sajtu. Jednostavno pozovite naš broj telefona, proverite dostupnost željene sale za željeni datum i rezervišite svoj prostor."
        }
        keywords={
          "sale, sala, izdavanje sala, izdavanje sale, rođendani, seminari, venčanja, sve vrste proslava, kamin, grande, svečana sala, kamin sala, sala grande, bašta, meni, jelovnik, jela, jelo, podložan promenama, jelovnik podložan promenama, rezervacije, rezervacija"
        }
        canonical={""}
      />
      <HallLayout>
        <section className="page-section">
          <HRPComponent />
        </section>
      </HallLayout>
    </>
  );
};

export default HallReservationPage;

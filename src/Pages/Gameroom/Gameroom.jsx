import React from "react";
import HallLayout from "../../Layout/HallLayout/HallLayout";
import { useLocation } from "react-router-dom";
import RestaurantLayout from "../../Layout/RestaurantLayout/RestaurantLayout";
import GameroomHero from "./Components/GameroomHero/GameroomHero";

const Gameroom = () => {
  const location = useLocation();
  const ifIsCelebration = ["/proslave/igraonica"].includes(location.pathname);

  return ifIsCelebration ? (
    <HallLayout>
      <GameroomHero />
    </HallLayout>
  ) : (
    <RestaurantLayout>
      <GameroomHero />
    </RestaurantLayout>
  );
};

export default Gameroom;

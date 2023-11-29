import React from "react";
import "./restaurant-about-section.css";
import restaurantimage from "../../../../Assets/Restaurant/restaurantImg24.jpg";

const RestaurantAboutSection = () => {
  return (
    <div className="restaurant-about-section">
      <div className="ras-content">
        <div className="ras-column slide-in from-left">
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </h3>
        </div>
        <div className="ras-column slide-in from-right">
          <img
            src={restaurantimage}
            alt="Slika restorana"
            className="ras-img"
          />
        </div>
      </div>
    </div>
  );
};

export default RestaurantAboutSection;

import React, { useEffect, useState } from "react";
import "./hall-navbar.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import kosutaLogo from "../../Assets/kosutaLogo.png";
import { FaLocationDot } from "react-icons/fa6";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillPhone,
  AiFillCloseCircle,
} from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";

const hallNavbarLinks = [
  {
    title: "Početna",
    link: "/proslave/početna",
  },
  {
    title: "O nama",
    link: "/proslave/o-nama",
  },
  {
    title: "Velika sala",
    link: "/proslave/velika-sala",
  },
  {
    title: "Srednja sala",
    link: "/proslave/srednja-sala",
  },
  {
    title: "Mala sala",
    link: "/proslave/mala-sala",
  },
  {
    title: "Jelovnik i pića",
    link: "/proslave/jelovnik",
  },
  {
    title: "Venčanja",
    link: "/proslave/venčanja",
  },
  {
    title: "Seminari",
    link: "/proslave/seminari",
  },
  {
    title: "Rođendani",
    link: "/proslave/rođendani",
  },
  {
    title: "Igraonica",
    link: "/proslave/igraonica",
  },
  {
    title: "Galerija",
    link: "/proslave/galerija",
  },
];

const HallNavbar = () => {
  const location = useLocation();
  const isRelativePage = [
    "/proslave/o-nama",
    "/proslave/jelovnik",
    "/proslave/igraonica",
    "/proslave/galerija",
  ].includes(location.pathname);

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  /*----- Change background on scroll -----*/
  const [back, setBack] = useState(false);
  const backgroundColor = () => {
    if (window.scrollY > 0) {
      setBack(true);
    } else {
      setBack(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", backgroundColor);

    return () => {
      window.removeEventListener("scroll", backgroundColor);
    };
  }, []);

  return (
    <>
      <div
        className={`hall-navbar ${back ? "background" : ""} ${
          isRelativePage ? "hall-navbar-relative" : ""
        }`}
      >
        <div className="hn-top">
          <div className="hn-top-content">
            <Link
              target="_blank"
              to="https://www.google.com/maps/place/Ko%C5%A1uta/@44.7695782,20.4376827,15z/data=!4m2!3m1!1s0x0:0x9866e4e49f98eaa?sa=X&ved=2ahUKEwjg-vr8up6CAxWY2AIHHSHuDR8Q_BJ6BAhOEAA&ved=2ahUKEwjg-vr8up6CAxWY2AIHHSHuDR8Q_BJ6BAhbEAg"
              className="hn-top-location"
            >
              <FaLocationDot />
              <span>Pionirska 32, Belgrade 11000</span>
            </Link>
            <Link
              target="_blank"
              to="https://www.instagram.com/restoran_kosuta/?hl=en"
              className="hn-top-instagram"
            >
              <AiFillInstagram />
            </Link>
            <Link
              target="_blank"
              to="https://www.facebook.com/p/Restoran-Kosuta-100063686285038/"
              className="hn-top-facebook"
            >
              <AiFillFacebook />
            </Link>
            <Link to="tel:+3810665255525" className="hn-top-phone">
              <AiFillPhone />
              <span>066 5255525</span>
            </Link>
          </div>
        </div>
        <div className="hn-bottom">
          <div className="hn-bottom-content">
            <Link to="/proslave/početna" className="hn-bottom-logo">
              <img src={kosutaLogo} alt="Košuta Logo" />
            </Link>
            <button className="hn-bottom-menu" onClick={toggleMenu}>
              <BiMenuAltRight />
            </button>
          </div>
        </div>
      </div>
      <div className={`hall-navbar-links ${isMenuOpen ? "open" : ""}`}>
        <button className="hn-close-menu" onClick={toggleMenu}>
          <AiFillCloseCircle />
        </button>
        {hallNavbarLinks.map((hallLink, index) => (
          <NavLink to={hallLink.link} key={index}>
            {hallLink.title}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default HallNavbar;

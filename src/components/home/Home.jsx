import React from "react";
import "./home.css";
import Me from "../../images/me.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home_img" />
        <h1 className="home_name">Jhet Andrei Dizon</h1>
        <span className="home_education">Gwapo</span>

        <HeaderSocials />
        <a href="" className="btn">
          Hire Me
        </a>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;

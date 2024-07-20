import React, { useState, useEffect } from "react";
import "./home.css";
import Me from "../../images/me.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

const Home = () => {
  const [status, setStatus] = useState("");
  const statuses = [
    "Full Stack Web Developer",
    "Back-End Developer",
    "Front-End Developer",
    "Software Engineering Student",
  ];
  const [index, setIndex] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [typingDirection, setTypingDirection] = useState(1);
  useEffect(() => {
    const currentStatus = statuses[index];
    const length = currentStatus.length;

    if (typingDirection === 1) {
      if (typingIndex < length) {
        const timeoutId = setTimeout(() => {
          setStatus((prevStatus) => prevStatus + currentStatus[typingIndex]);
          setTypingIndex((prevTypingIndex) => prevTypingIndex + 1);
        }, 100);
        return () => clearTimeout(timeoutId);
      } else {
        const timeoutId = setTimeout(() => {
          setTypingDirection(-1);
        }, 2000);
        return () => clearTimeout(timeoutId);
      }
    } else {
      if (typingIndex > 0) {
        const timeoutId = setTimeout(() => {
          setStatus((prevStatus) => prevStatus.slice(0, -1));
          setTypingIndex((prevTypingIndex) => prevTypingIndex - 1);
        }, 60);
        return () => clearTimeout(timeoutId);
      } else {
        const nextIndex = (index + 1) % statuses.length;
        setTypingIndex(0);
        const timeoutId = setTimeout(() => {
          setStatus("");
          setIndex(nextIndex);
          setTypingDirection(1);
        }, 0);
        return () => clearTimeout(timeoutId);
      }
    }
  }, [index, typingIndex, statuses, typingDirection]);

  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="Jhet Andrei Dizon" className="home_img" />
        <h1 className="home_name">Jhet Andrei Dizon</h1>
        <span className="home_education" style={{ minHeight: "1.7em" }}>
          {status}
        </span>
        <HeaderSocials />
        <a href="#" className="btn">
          More About Me
        </a>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;

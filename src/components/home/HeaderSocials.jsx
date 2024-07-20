import React from "react";
import { FaInstagram, FaGithubSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const HeaderSocials = () => {
  return (
    <div className="home_socials">
      <a
        href="https://www.instagram.com/jhiiiitt/"
        className="home_socials-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.linkedin.com/in/jhet-andrei-dizon-0ba0782a2/"
        className="home_socials-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CiLinkedin />
      </a>
      <a
        href="https://github.com/schrodinger41"
        className="home_socials-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubSquare />
      </a>
    </div>
  );
};

export default HeaderSocials;

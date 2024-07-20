import React from "react";
import { FaInstagram, FaGithubSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const HeaderSocials = () => {
  return (
    <div className="home_socials">
      <a
        href="https://instagram.com"
        className="home_socials-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        href="https://linkedin.com"
        className="home_socials-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CiLinkedin />
      </a>
      <a
        href="https://github.com"
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

import React, { useState } from "react";
import { Link } from "react-scroll";
import logoImg from "../../images/icon.png";
import "./navbar.css";

import { HiOutlineMenuAlt3 } from "react-icons/hi";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar-content flex">
        <div className="brand-and-toggler flex flex-sb">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="navbar-brand flex"
            onClick={handleNavbar}
          >
            <img src={logoImg} alt="site logo" />
          </Link>
          <button
            type="button"
            className="navbar-toggler-btn"
            onClick={handleNavbar}
          >
            <HiOutlineMenuAlt3
              size={35}
              style={{
                color: `${toggleMenu ? "#fff" : "#9b00cc"}`,
              }}
            />
          </button>
        </div>

        <div
          className={
            toggleMenu
              ? "navbar-collapse show-navbar-collapse"
              : "navbar-collapse"
          }
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="nav-link text-uppercase"
                onClick={handleNavbar}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="nav-link text-uppercase"
                onClick={handleNavbar}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="nav-link text-uppercase"
                onClick={handleNavbar}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="nav-link text-uppercase"
                onClick={handleNavbar}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

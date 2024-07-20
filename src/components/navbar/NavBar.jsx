import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../images/icon.png";
import "./navbar.css";

import { HiOutlineMenuAlt3 } from "react-icons/hi";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className="navbar" id="navbar">
      <div className=" navbar-content flex">
        <div className="brand-and-toggler flex flex-sb">
          <Link to="/" className="navbar-brand flex">
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
              <Link to="#" className="nav-link text-uppercase">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link text-uppercase">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link text-uppercase">
                Project
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link text-uppercase">
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

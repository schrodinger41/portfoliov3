import React, { useState } from "react";
import "./themeSwitcher.css";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    document.documentElement.setAttribute(
      "data-theme",
      theme === "dark" ? "light" : "dark"
    );
  };

  return (
    <div className="nav-link">
      <div className="theme__toggler" onClick={toggleTheme}>
        {theme === "dark" ? <FaMoon /> : <FaSun />}
      </div>
    </div>
  );
};

export default ThemeSwitcher;

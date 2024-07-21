import React from "react";
import { Link } from "react-scroll";

const ScrollDown = () => {
  return (
    <div className="scroll_down">
      <Link to="about" smooth={true} duration={500} className="mouse_wrapper">
        <span className="home_scroll-name">Scroll Down</span>
        <span className="mouse">
          <span className="wheel"></span>
        </span>
      </Link>
    </div>
  );
};

export default ScrollDown;

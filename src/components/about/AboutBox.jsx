import React from "react";
import { PiFire } from "react-icons/pi";
import { BsCupHot } from "react-icons/bs";
import { GoPeople } from "react-icons/go";

const AboutBox = () => {
  return (
    <div className="about_boxes grid">
      <div className="about_box">
        <i className="about_icon">
          <PiFire />
        </i>
        <h3 className="about_title">198</h3>
        <span className="about_subtitle">Projects Completed</span>
      </div>

      <div className="about_box">
        <i className="about_icon">
          <BsCupHot />
        </i>
        <h3 className="about_title">5479</h3>
        <span className="about_subtitle">Cups of Coffee</span>
      </div>

      <div className="about_box">
        <i className="about_icon">
          <GoPeople />
        </i>
        <h3 className="about_title">312</h3>
        <span className="about_subtitle">Happy People</span>
      </div>

      <div className="about_box">
        <i className="about_icon">
          <GoPeople />
        </i>
        <h3 className="about_title">312</h3>
        <span className="about_subtitle">Happy People</span>
      </div>
    </div>
  );
};

export default AboutBox;

import React from "react";
import { PiFire } from "react-icons/pi";
import { BsCupHot } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { MdComputer } from "react-icons/md";
import { RiEmotionHappyLine } from "react-icons/ri";

const AboutBox = () => {
  return (
    <div className="about_boxes grid">
      <div className="about_box">
        <i className="about_icon">
          <PiFire />
        </i>
        <h3 className="about_title">8</h3>
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
          <MdComputer />
        </i>
        <h3 className="about_title">3123</h3>
        <span className="about_subtitle">Hours on PC</span>
      </div>

      <div className="about_box">
        <i className="about_icon">
          <RiEmotionHappyLine />
        </i>
        <h3 className="about_title">1</h3>
        <span className="about_subtitle">Happy Moment</span>
      </div>
    </div>
  );
};

export default AboutBox;

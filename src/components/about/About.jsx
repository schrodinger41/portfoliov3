import React from "react";
import "./about.css";
import about from "../../images/about.jpg";
import AboutBox from "./AboutBox";
import { resume } from "../../data";
import Skills from "./Skills";
import ResumeItem from "./ResumeItem";

const About = () => {
  return (
    <section className="about container section" id="about">
      <div className="separator"></div>
      <h2 className="section_title">About Me</h2>
      <div className="about_container grid">
        <img src={about} alt="" className="about_img" />

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
              Since childhood, I've been captivated by technology. Now, as a
              software engineering student, I'm channeling that passion into
              learning and coding. My goal? To shape the future of technology
              through my creations and contributions.
            </p>
            <a
              href="https://drive.google.com/file/d/1qUzNS1F6HBAmjneSGo2uI7YGVBZYKQdj/view?usp=sharing"
              target="blank"
              className="btn intro-vid "
            >
              View CV
            </a>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="blank"
              className="btn"
            >
              Introduction Video
            </a>
          </div>

          <div className="about_skill grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Development</h3>
                <span className="skills_number ">90%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage development"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">UI/UX Design</h3>
                <span className="skills_number">80%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage ui_design"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
      <div className="separator"></div>
      <section className="skills">
        <h3 className="section__subtitle subtitle__center">My Skills</h3>

        <div className="skills__container grid">
          <Skills />
        </div>
      </section>

      <div className="separator"></div>

      <section className="resume">
        <h3 className="section__subtitle subtitle__center">Education</h3>

        <div className="resume__container grid">
          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === "experience") {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>
          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === "education") {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;

import React, { useState } from "react";
import { FaLink } from "react-icons/fa";
import "./projects.css";
import Menu from "./Menu";

const Projects = () => {
  const [items, setItems] = useState(Menu);

  return (
    <section className="work container section" id="projects">
      <div className="separator"></div>
      <h2 className="section_title">Projects</h2>

      <div className="work_container grid">
        {items.map((elem) => {
          const { id, image, title, category, link } = elem;
          return (
            <div className="work_card" key={id}>
              <div className="work_thumbnail">
                <img src={image} alt="" className="work_img" />
                <div className="work_mask"></div>
              </div>

              <span className="work_category">{category}</span>
              <h3 className="work_title">{title}</h3>
              <a
                href={link}
                className="work_button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLink />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

import React from "react";
import Navbar from "../../components/navbar/NavBar";
import Home from "../../components/home/Home";
import About from "../../components/about/About";
import Projects from "../../components/projects/Projects";
import Contact from "../../components/contact/Contact";
import "./index.css";

const Index = () => {
  return (
    <div>
      <Navbar />

      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;

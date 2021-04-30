import React from "react";
import { motion } from "framer-motion";
import "./Portfolio.css";
import ProjectCards from "../ProjectCards/ProjectCards";

export const Portfolio = () => {
  return (
    <div className="portfolio">
      <motion.h2
        className="portfolio-title"
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 4 }}>
        Projects
      </motion.h2>
      <div className="project-wrapper">
        <ProjectCards
          title="new facebook"
          technology="react + vue + css"
          detail="i just created the new facebook"
        />
        <ProjectCards
          title="new facebook"
          technology="react + vue + css"
          detail="i just created the new facebook"
        />
        <ProjectCards
          title="new facebook"
          technology="react + vue + css"
          detail="i just created the new facebook"
        />
        {/* <ProjectCards
          title="new facebook"
          technology="react + vue + css"
          detail="i just created the new facebook"
        /> */}
      </div>
    </div>
  );
};

export default Portfolio;
// note to self
// create project cards for your individual projects

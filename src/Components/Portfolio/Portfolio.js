import React from "react";
import { motion } from "framer-motion";
import "./Portfolio.css";
import ProjectCards from "../ProjectCards/ProjectCards";

export const Portfolio = () => {
  return (
    <motion.section className="portfolio" >
      <div className="container">
        {/* Title */}
        <motion.h2
          className="portfolio-title"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 4 }}>
          Projects
        </motion.h2>
        {/* Grid wrapper for project cards   */}
        <div className="project-wrapper">
          <ProjectCards
            title="New Facebook"
            technology="react + vue + css"
            detail="i just created the new facebook, this ought to make mark mad and try to buy it"
          />
          <ProjectCards
            title="New Facebook"
            technology="react + vue + css"
            detail="i just created the new facebook, this ought to make mark mad and try to buy it"
          />
          <ProjectCards
            title="New Facebook"
            technology="react + vue + css"
            detail="i just created the new facebook, this ought to make mark mad and try to buy it"
          />
          <ProjectCards
            title="new facebook"
            technology="react + vue + css"
            detail="i just created the new facebook, this ought to make mark mad and try to buy it"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;

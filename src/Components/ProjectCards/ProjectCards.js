import React from "react";
import { motion } from "framer-motion";
import "./ProjectCards.css"

const ProjectCards = (props) => {
  return (
    <motion.div className="card">
      <div className="container">
      <div className="header">
        <p className="project-title">{props.title}</p>
        <p className="project-technology">{props.technology}</p>
      </div>
        <p className="project-detail">{props.detail}</p>
        <div className="link-container">
          <span className="github"></span>
          <span className="live"></span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCards;

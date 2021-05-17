import React from "react";
import { motion } from "framer-motion";
import "./ProjectCards.css";

const ProjectCards = (props) => {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 4 }}>
      <div className="container">
        {/* header containeing project title and project technologies */}
        <div className="header">
          <p className="project-title">{props.title}</p>
          <p className="project-technology">{props.technology}</p>
        </div>
        {/* description of the project */}
        <div className="main">
          <p className="project-detail">{props.detail}</p>
        </div>
        {/* footer containing the github and live links to the projec */}
        <div className="footer">
          <span className="github">github</span>
          <span className="live">live</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCards;

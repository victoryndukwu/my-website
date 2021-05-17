import React from "react";
import "./ProjectCards2.css";

function ProjectCards2(props) {
  return (
    <div className={props.reverse ? "reverse" : "project"}>
      <div className="project-image-container">
        <img src={props.image} alt={props.alt} className="project-image" />
      </div>
      <div className="project-details">
        <p className="">{props.title}</p>
        <p>{props.details}</p>
      </div>
    </div>
  );
}

export default ProjectCards2;

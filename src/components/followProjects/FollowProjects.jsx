import React from "react";
import "./followProjects.css";
import ProjectCard from "../projectCard/ProjectCard";

const FollowProjects = ({ projects }) => {
  return (
    <div className="followProjects">
      <div className="followProjects_heading">
        <h1 className="heading-1">Follow Our Projects</h1>
        <p className="text">
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
      </div>
      <div className="followProjects-projects">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              image={project.image}
              heading={project.heading}
              text={project.text}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FollowProjects;

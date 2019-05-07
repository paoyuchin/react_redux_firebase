import React from "react";
import '../../index';

const ProjectSummary = ({project}) => {
  return (
    <div className="project_summary">
      <div className="project_title">{project.title}</div>
      <p className="project_name">{project.content}</p>
      <p className="project_time">3rd september,2 am</p>
    </div>
  );
};

export default ProjectSummary;

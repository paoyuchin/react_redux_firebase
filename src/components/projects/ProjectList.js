import React, { Component } from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
  return (
    <div className="ProjectList">
      {projects &&
        projects.map((project) => (
            <ProjectSummary project={project}  />
        ))}
    </div>
  );
};

export default ProjectList;

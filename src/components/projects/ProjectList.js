import React, { Component } from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
  return (
    <div className="review_list">
      {projects &&
        projects.map((project) => (
            <ProjectSummary project={project}  />
        ))}
    </div>
  );
};

export default ProjectList;

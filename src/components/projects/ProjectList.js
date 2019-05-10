import React, { Component } from 'react';
import ProjectSummary from './ProjectSummary';
import {Link} from 'react-router-dom';

const ProjectList = ({ projects }) => {
  return (
    <div className="ProjectList">
      {projects &&
        projects.map((project) => (
          <Link to={"/project/" + project.id} key={project.id}>
            <ProjectSummary project={project}  />
          </Link>
        ))}
    </div>
  );
};

export default ProjectList;

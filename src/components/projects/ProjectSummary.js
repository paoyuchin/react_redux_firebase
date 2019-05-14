import React from "react";
import '../../index';
import moment from 'moment'

const ProjectSummary = ({project}) => {
  return (
    <div className="project_summary">
      <div className="project_title">{project.title}</div>
      <p className="project_name">{project.content}</p>
      <div className="postPerson">
        psot by: {project.authorFirstName} {project.authorLastName}
      </div>
      <p className="post_time">
        {moment(project.creatAt.toDate()).calendar()}
      </p>
    </div>
  );
};

export default ProjectSummary;

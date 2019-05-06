import React from "react";
import '../../index'

const ProjectDetails = props => {
  console.log(props);
  const id = props.match.params.id;
  return (
    <div className="ProjectDetails">
      <span className="project_id">your project id {id}</span>
      <div className="posted_by">posted by bonbon</div>
      <div className="post_time">2nd septmender, 2am on morning</div>
    </div>
  );
};
export default ProjectDetails;

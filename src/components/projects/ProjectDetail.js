import React from "react";

const ProjectDetails = props => {
  console.log(props);
  const id = props.match.params.id;
  return (
    <div>
      <span>your project id = {id}</span>
      <div>posted by bonbon</div>
      <div>2nd septmender, 2am on morning</div>
    </div>
  );
};
export default ProjectDetails;

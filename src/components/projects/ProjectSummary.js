import React from "react";
import "../../index";
import moment from "moment";
import "../../config/fbConfig";
import firebase from "firebase/app";

class ProjectSummary extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { project } = this.props;
    console.log(1, project.creatAt)
    return (
      <div className="review_box">
        <div className="post_time">
          <div className="date">
            <span>{moment(project.creatAt.toDate()).calendar()}</span>
          </div>
        </div>
        <div className="post">
          <div className="review_title">{project.title}</div>
          <p className="review_content">{project.content}</p>
          <div className="postPerson">
            {project.authorFirstName} {project.authorLastName}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectSummary;

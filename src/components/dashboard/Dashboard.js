import React, { Component } from "react";
import Notification from "./Notification";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Dashboard extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div className="Dashboard">
        <ProjectList projects={projects} />
        <Notification />
      </div>
    );
  }
}

const mapStateToPros = state => {
  return {
    projects: state.firestore.ordered.projects
  };
};

export default compose(
  connect(mapStateToPros),
  firestoreConnect([{ collection: "projects" }])
)(Dashboard);

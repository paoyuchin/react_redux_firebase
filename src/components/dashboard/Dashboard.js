import React, { Component } from "react";
import Notification from "./Notification";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    const { projects, auth } = this.props;
    console.log('auth', auth)
    if (!auth.uid) return <Redirect to='/signin' />

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
    projects: state.firestore.ordered.projects,
    auth: state.firebaseReducer.auth
  };
};

export default compose(
  connect(mapStateToPros),
  firestoreConnect([{ collection: "projects" }])
)(Dashboard);

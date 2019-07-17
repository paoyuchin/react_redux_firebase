import React, { Component } from "react";
import Notification from "./Notification";
import Footer from "../layout/Footer";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import "./dashboard.scss";

class Dashboard extends Component {
  render() {
    const { projects, auth, notifications } = this.props;
    // if (!auth.uid) return <Redirect to="/signin" />;

    if(!this.props){
      return(
        <div>
          <img src="https://mshopstatic-in.vivo.com/dist/images/common/loading_e5479cc.gif" alt=""/>
        </div>
      )
    }else{
      return (
        <div>
            <div className="reviews fixed_size">
              <ProjectList projects={projects} />
              <Notification notifications={notifications} />
            </div>
          <Footer />
        </div>
      );
    }
  }
}

const mapStateToPros = state => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  };
};

export default compose(
  connect(mapStateToPros),
  firestoreConnect([
    { collection: "projects", orderBy: ["creatAt", "desc"] },
    { collection: "notifications", limit: 10, orderBy: ["time", "desc"] }
  ])
)(Dashboard);

import React, { Component } from "react";
import Notification from "./Notification";
import ProjectList from '../projects/ProjectList'
class Dashboard extends Component {
  render() {
    return (
      <div>
        <ProjectList/>
        <Notification />
      </div>
    );
  }
}

export default Dashboard;

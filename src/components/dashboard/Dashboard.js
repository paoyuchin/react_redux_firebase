import React, { Component } from "react";
import Notification from "./Notification";
import ProjectList from '../projects/ProjectList'
import {connect} from 'react-redux';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <ProjectList />
        <Notification />
      </div>
    );
  }
}

const mapStateToPros = (state)=>{
  return {
    projects: state.projects
  }
};

export default connect()(Dashboard);

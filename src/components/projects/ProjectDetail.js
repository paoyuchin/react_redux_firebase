import React from "react";
import "../../index";
import moment from "moment";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import "../../config/fbConfig";
import firebase from "firebase/app";

class ProjectDetails extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   imageURL: ""
  //   // };
  // }
  // componentDidMount(){
  //   this.getImage(this.props.project.imageTitle);
  // }
  // getImage(imageTitle) {
  //   console.log("getImage works work in project detail");
  //   var storage = firebase.storage();
  //   var storageRef = storage.ref();
  //   storageRef
  //     .child(`${imageTitle}.jpg`)
  //     .getDownloadURL()
  //     .then(url => {
  //       console.log(url)
  //       this.setState({
  //         imageURL: url
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     });
  // }

  render() {
    const { project, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    if (project) {
      return (
        <div className="ProjectDetails">
          <span className="project_id">
            your project id : {project.title}
          </span>
          {/* <div className='pic'>
            <img src={this.state.imageURL} />
          </div> */}
          <div className="posted_by">{project.content}</div>
          <div className="postPerson">
            psot by: {project.authorFirstName} {project.authorLastName}
          </div>
          <div className="post_time">
            {moment(project.creatAt.toDate()).calendar()}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <p>loading... projectdetail</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);

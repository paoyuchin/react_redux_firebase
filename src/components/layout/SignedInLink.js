import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authAction";

const SignedInLinks = props => {
  console.log('props', props)
  return (
    <React.Fragment>
      <ul>
        <li>
          <Link to="/create">
            <p className="cloud4">
              NEW PROJECT
              <div className="grassimg" />
            </p>
          </Link>
        </li>
        <li>
          <a onClick={props.signOut}>LOG OUT(登出)</a>
        </li>
        <li className="sun">
          Hello, {props.profile.initials}{" "}
          {props.displayName && props.displayName}
          <div className="sunbeams">
            <div className="beam beam1" />
            <div className="beam beam2" />
            <div className="beam beam3" />
            <div className="beam beam4" />
            <div className="beam beam5" />
            <div className="beam beam6" />
            <div className="beam beam7" />
            <div className="beam beam8" />
          </div>
        </li>
      </ul>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null,mapDispatchToProps)(SignedInLinks);

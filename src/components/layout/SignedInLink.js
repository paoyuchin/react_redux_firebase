import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authAction";

const SignedInLinks = props => {
  return (
    <React.Fragment>
      <ul>
          Hello, {props.profile.initials}{" "}
          {props.displayName && props.displayName}
          <a onClick={props.signOut}>
            LOG OUT(登出)
            <div />
          </a>
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
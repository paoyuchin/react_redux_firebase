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
          <Link to="/create">NEW PROJECT</Link>
        </li>
        <li>
          <a onClick={props.signOut}>LOG OUT(登出)</a>
        </li>
        <li className="welcome">Hello, {props.profile.initials} {props.displayName && props.displayName}</li>
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

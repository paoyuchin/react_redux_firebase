import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authAction';


const SignedInLinks = () => {


  return (
    <React.Fragment>
      <ul>
        <li>
          <NavLink to="/create">New Project</NavLink>
        </li>
        <li>
          <NavLink to="/">Log out</NavLink>
        </li>
        <li>
          <NavLink to="/">^______^</NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);

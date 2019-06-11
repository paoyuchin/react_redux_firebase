import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLink";
import SignedOutLinks from "./SingedOutLink";
import "../../index";
import { connect } from "react-redux";

const Navbar = props => {
  const { auth, profile } = props;
  const link = auth.uid ? (
    <SignedInLinks profile={profile} displayName={auth.displayName}/>
  ) : (
    <SignedOutLinks />
  );
  return (
    <div className="navigation_bar">
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/products">
        <span>PRODUCT</span>
      </Link>
      <Link to="/Dashboard">
        <span>REVIEWS</span>
      </Link>
      {link}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);

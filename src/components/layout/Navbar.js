import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLink";
import SignedOutLinks from "./SingedOutLink";
import "../../index";
import { connect } from "react-redux";
import "./header.scss";

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
        <p class="cloud1">
          Home
          <img src="http://katofarm-f.jp/svg/logo.svg" alt="logo" />
        </p>
      </Link>
      <Link to="/products">
        <span class="cloud2">
          PRODUCT
          <div className="grass_img" />
        </span>
      </Link>
      <Link to="/Dashboard">
        <span class="cloud3">
          REVIEWS
          <div className="note_img" />
        </span>
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

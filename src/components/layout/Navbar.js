import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLink";
import SignedOutLinks from './SingedOutLink';
import "../../index";
import { connect } from "react-redux";


const Navbar = (props) => {
  const { auth } = props;
  console.log("auth", auth);
  const link = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <div className="navbar">
      <Link to="/">
        <span>MARIO PLAN</span>
      </Link>
      { link }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebaseReducer.auth
  };
};

export default connect(mapStateToProps)(Navbar);

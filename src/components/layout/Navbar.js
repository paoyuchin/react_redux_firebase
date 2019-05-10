import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLink";
import SignedOutLinks from './SingedOutLink';
import "../../index";
import { connect } from "react-redux";


const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <span>bonbon</span> 
      </Link>
      <SignedInLinks />
      <SignedOutLinks />
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log('state', state)
  return {

  }
};

export default connect(mapStateToProps)(Navbar);

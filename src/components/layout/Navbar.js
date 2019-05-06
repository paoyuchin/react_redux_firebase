import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLink";
import SignedOutLinks from './SingedOutLink';
import "../../index";

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
export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLink";
import SignedOutLinks from './SingedOutLink';
const Navbar = () => {
  return (
    <div>
      <Link to="/">bonbon</Link>
      <SignedInLinks />
      <SignedOutLinks/>
    </div>
  );
};
export default Navbar;

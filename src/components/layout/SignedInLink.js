import React from "react";
import { Link } from "react-router-dom";
const SignedInLinks = () => {
  return (
    <React.Fragment>
      <Link to="/">
        <span>new project</span>
      </Link>
      <Link to="/">
        <span>log out</span>
      </Link>
      <Link to="/">
        <span> logo signature</span>
      </Link>
    </React.Fragment>
  );
};
export default SignedInLinks;

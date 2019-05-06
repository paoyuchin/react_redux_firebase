import React from "react";
import { Link } from "react-router-dom";
const SignedOutLinks = () => {
  return (
    <React.Fragment>
      <Link to="/">
        <span>signup</span>
      </Link>
      <Link to="/">
        <span>log in</span>
      </Link>
      </React.Fragment>
  );
};
export default SignedOutLinks;

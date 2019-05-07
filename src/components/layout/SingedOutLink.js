import React from "react";
import { Link } from "react-router-dom";
const SignedOutLinks = () => {
  return (
    <React.Fragment>
      <Link to="/signup">
        <span>signup</span>
      </Link>
      <Link to="signin">
        <span>log in</span>
      </Link>
    </React.Fragment>
  );
};
export default SignedOutLinks;

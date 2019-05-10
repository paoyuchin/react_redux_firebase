import React from "react";
import { Link } from "react-router-dom";
const SignedOutLinks = () => {
  return (
    <React.Fragment>
      <Link to="/signup">
        <span>sign out</span>
      </Link>
      <Link to="signin">
        <span>sign out</span>
      </Link>
    </React.Fragment>
  );
};
export default SignedOutLinks;

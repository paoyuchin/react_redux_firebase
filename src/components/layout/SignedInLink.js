import React from "react";
import { Link } from "react-router-dom";
const SignedInLinks = () => {
  return (
    <React.Fragment>
      <Link to="/createProject">
        <span>new project</span>
      </Link>
      <Link to="/signup">
        <span>log out</span>
      </Link>
      <Link to="/">
        <span>^______^</span>
      </Link>
    </React.Fragment>
  );
};
export default SignedInLinks;

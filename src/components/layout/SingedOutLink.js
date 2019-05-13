import React from "react";
import { Link } from "react-router-dom";
const SignedOutLinks = () => {
  return (
    <React.Fragment>
      <Link to="/signin">
        <span>SIGN IN(登入)</span>
      </Link>
      <Link to="/signup">
        <span>LOGIN IN(註冊)</span>
      </Link>
    </React.Fragment>
  );
};
export default SignedOutLinks;

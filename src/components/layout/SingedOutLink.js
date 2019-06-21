import React from "react";
import { Link } from "react-router-dom";
const SignedOutLinks = () => {
  return (
    <React.Fragment>
        <span>Hello, 你還沒登入喔!</span>
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
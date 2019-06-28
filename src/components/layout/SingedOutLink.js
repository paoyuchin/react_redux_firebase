import React from "react";
import { Link } from "react-router-dom";
const SignedOutLinks = () => {
  return (
    <React.Fragment>
        <Link to="/signin">
          <span>登入</span>
        </Link>
        <Link to="/signup">
          <span>註冊</span>
        </Link>
      <span>你還沒登入喔!</span>
    </React.Fragment>
  );
};
export default SignedOutLinks;
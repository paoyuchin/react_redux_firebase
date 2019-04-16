import React from "react";
import { Link } from "react-router-dom";
const SignedOutLinks = () => {
  return (
    <div>
      <Link to="/">signup</Link>
      <Link to="/">login</Link>
    </div>
  )
};
export default SignedOutLinks;

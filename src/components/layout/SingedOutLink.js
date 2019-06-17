import React from "react";
import { Link } from "react-router-dom";
const SignedOutLinks = () => {
  return (
    <React.Fragment>
      <div className="cloud4">
        <div className="grassimg" />
        <li>Hello, 你還沒登入喔!</li>
        <Link to="/signin">
          <span>SIGN IN(登入)</span>
        </Link>
        <Link to="/signup">
          <span>LOGIN IN(註冊)</span>
        </Link>
      </div>
    </React.Fragment>
  );
};
export default SignedOutLinks;

//  <React.Fragment>
//     <li className="not_sign_in_logo">
//       Hello, 你還沒登入喔!
//       <div className="sunbeams">
//         <div className="beam beam1" />
//         <div className="beam beam2" />
//         <div className="beam beam3" />
//         <div className="beam beam4" />
//         <div className="beam beam5" />
//         <div className="beam beam6" />
//         <div className="beam beam7" />
//         <div className="beam beam8" />
//       </div>
//     </li>
//     <Link to="/signin">
//       <span>SIGN IN(登入)</span>
//     </Link>
//     <Link to="/signup">
//       <span>LOGIN IN(註冊)</span>
//     </Link>
//   </React.Fragment>

import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authAction";

const SignedInLinks = props => {
  return (
    <React.Fragment>
      <ul>
        <p className="cloud4">
          Hello, {props.profile.initials}{" "}
          {props.displayName && props.displayName}
          <a onClick={props.signOut}>
            LOG OUT(登出)
            <div className="grassimg" />
          </a>
        </p>
      </ul>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null,mapDispatchToProps)(SignedInLinks);


      // <li>
      //     <Link to="/create">
      //       <p className="cloud4">
      //         NEW PROJECT
      //         <div className="grassimg" />
      //       </p>
      //     </Link>
      //   </li>
      //   <li>

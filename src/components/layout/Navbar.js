import React, { Component} from "react";
import { Link, withRouter } from "react-router-dom";
import SignedInLinks from "./SignedInLink";
import SignedOutLinks from "./SingedOutLink";
import "../../index";
import { connect } from "react-redux";
import "./header.scss";
import "../common.scss";
import InsideHeader from "./InsideHeader";
import IndexHeader from "./IndexHeader";



class Navbar extends Component {
  render(){
    const { auth, profile, currentUrl } = this.props;
    const link = auth.uid ? (
      <SignedInLinks profile={profile} displayName={auth.displayName} />
    ) : (
        <SignedOutLinks />
      );
    const header = currentUrl === "/" ? <IndexHeader /> : <InsideHeader currentUrl={currentUrl} />
    return (
      <div className="nav_link inside_header body_body_color">
        {header}
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/products">
          <span>PRODUCT</span>
        </Link>
        <Link to="/Dashboard">
          <span>REVIEWS</span>
        </Link>
        {link}
      </div>
    );
  }
};

const mapStateToProps = (state,  ownprops) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    currentUrl: ownprops.location.pathname
  };
};

export default withRouter(connect(mapStateToProps)(Navbar));

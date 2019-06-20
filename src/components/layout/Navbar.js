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
    const header = currentUrl === "/" ? <IndexHeader /> : <InsideHeader/>
    return (
      <div>
        {header}
        <Link to="/">
            Home
            <img src="http://katofarm-f.jp/svg/logo.svg" alt="logo" />
        </Link>
        <Link to="/products">
            PRODUCT
            <div className="grass_img" />
        </Link>
        <Link to="/Dashboard">
            REVIEWS
            <div className="note_img" />
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

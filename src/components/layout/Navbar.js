import React, { Component} from "react";
import { Link, withRouter } from "react-router-dom";
import SignedInLinks from "./SignedInLink";
import SignedOutLinks from "./SingedOutLink";
import "../../index";
import { connect } from "react-redux";
import "./header.scss";
import "../common.scss";


class Navbar extends Component {

  render(){
    const { auth, profile, currentUrl } = this.props;
    console.log(33333, this.props);
    const link = auth.uid ? (
      <SignedInLinks profile={profile} displayName={auth.displayName} />
    ) : (
        <SignedOutLinks />
      );
    const SliderSettings = {
      dots: false,
      autoplay: true,
      // autoplaySpeed: 500
    };
    return (
      <div
        className={
          currentUrl === "/"
            ? "navigation_bar"
            : "navigation_bar navigation_innerpage_bar"
        }
      >
        <Link to="/">
          <p class="cloud1">
            Home
            <img src="http://katofarm-f.jp/svg/logo.svg" alt="logo" />
          </p>
        </Link>
        <Link to="/products">
          <span class="cloud2">
            PRODUCT
            <div className="grass_img" />
          </span>
        </Link>
        <Link to="/Dashboard">
          <span class="cloud3">
            REVIEWS
            <div className="note_img" />
          </span>
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

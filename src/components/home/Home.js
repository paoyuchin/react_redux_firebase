import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";
import { weatherAction } from "../../store/actions/weatherAction";
import GoogleMap from "./GoogleMap";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import Notification from "../dashboard/Notification";
import { Link } from "react-router-dom";
import './home.scss'
let moment = require("moment");


class Home extends Component {
  componentDidMount() {
    this.props.getWeather();
  }
  render() {
    const { notifications } = this.props;
    const year = moment().year();
    const month = moment().format('MM');
    const day = moment().format('DD');
    return (
      <div>
        <div>
          今天是{year}年{month}月{day}日
        </div>
        <p>today's weather</p>
        {this.props.weather.weather} at {this.props.weather.cityName}
        <img
          src={this.props.weather && this.props.weather.weatherIconUrl}
          alt=""
        />
        {/* <GoogleMap /> */}
        <div className="about_us">
          <h5>
            來源:
          <p>{!!this.props.aboutUs && this.props.aboutUs[0].how}</p>
            <img
              src={this.props.aboutUs ? this.props.aboutUs[0].image1 : undefined}
              alt=""
            />
          </h5>
          <h5>
            歷史:
          <p>{!!this.props.aboutUs && this.props.aboutUs[0].original}</p>
            <img
              src={this.props.aboutUs ? this.props.aboutUs[0].image2 : undefined}
              alt=""
            />
          </h5>
          <h5>
            什麼:
          <p>{!!this.props.aboutUs && this.props.aboutUs[0].what}</p>
            <img
              src={this.props.aboutUs ? this.props.aboutUs[0].image3 : undefined}
              alt=""
            />
          </h5>
        </div>
        {/* <GoogleMap /> */}
          <Notification notifications={notifications} />
          <h5 >click me to make a review</h5>
        <Link to="/create">I WANT TO MAKE REVIEW</Link>
      </div>
    );
  }
}

const mapStateToPros = (state) => {
  return {
    weather: state.weather,
    aboutUs: state.firestore.ordered.aboutus,
    notifications: state.firestore.ordered.notifications, 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getWeather: () => dispatch(weatherAction())
  };
};

export default compose(
  connect(
    mapStateToPros,
    mapDispatchToProps
  ),
  firestoreConnect([
    { collection: "aboutus" },
    { collection: "notifications", orderBy: ["time", "desc"] }
  ])
)(Home);

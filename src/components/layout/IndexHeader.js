import React, { Component } from "react";
import { connect } from "react-redux";
// import "../home/home.scss";
import "../common.scss";
import Carousel from "react-bootstrap/Carousel";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { weatherAction } from "../../store/actions/weatherAction";
let moment = require("moment");



class IndexHeader extends Component {
  state = {
    position: ""
  };
  render() {
    const year = moment().year();
    const month = moment().format("MM");
    const day = moment().format("DD");
    return (
      <div className="BigggggIndex">
        <p class="index_carousel_bg">
          <div className="circle" />
          <div className="index_info">
            <h3 className="h3_title">大自然給的養生禮物</h3>
            <h2 className="color_03">穀米私人廚房</h2>
            <p className="color_01">
              今天是 {day}/{month}/{year}
            </p>
            {this.props.weather.weather ? (
              <p className="color_02">
                你所在位置的天氣：{this.props.weather.weather}
                <img
                  src={this.props.weather && this.props.weather.weatherIconUrl}
                  alt=""
                />
                <span className="color_03">
                  {this.props.weather.tempeture}°C
                </span>
              </p>
            ) : (
                <p className="color_03">正在幫您搜尋天氣狀況中... </p>
              )}
          </div>
        </p>
        <Carousel
          fade={true}
          pauseOnHover={false}
          controls={false}
          indicators={false}
          interval={2000}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://haranoujyo.com/assets/img/top/fv_04.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://haranoujyo.com/assets/img/top/fv_01.jpg"
              alt="Third slide"
            />
          </Carousel.Item>

        </Carousel>
      </div>
    );
  }
}

const mapStateToPros = state => {
  return {
    weather: state.weather,
    aboutUs: state.firestore.ordered.aboutus,
    notifications: state.firestore.ordered.notifications
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
    { collection: "notifications", limit: 6, orderBy: ["time", "desc"] }
  ])
)(IndexHeader);
// https://react-bootstrap.github.io/components/carousel/

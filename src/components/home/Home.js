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
import "./home.scss";
import "../common.scss";
// import Carousel from "nuka-carousel";

let moment = require("moment");

class Home extends Component {
  componentDidMount() {
    this.props.getWeather();
  }
  render() {
    const { notifications } = this.props;
    const year = moment().year();
    const month = moment().format("MM");
    const day = moment().format("DD");
    return (
      <div className="home">
        {/* <div className="slider_wrap" style={{ width: "65%", margin: "auto" }}>
          <Carousel
            autoplay={true}
            autoplayInterval={1000}
            autoGenerateStyleTag={true}
          >
            <img src="http://fakeimg.pl/440x300/282828/EAE0D0/?text=1" />
            <img src="http://fakeimg.pl/440x300/282828/EAE0D0/?text=2" />
            <img src="http://fakeimg.pl/440x300/282828/EAE0D0/?text=3" />
            <img src="http://fakeimg.pl/440x300/282828/EAE0D0/?text=4" />
            <img src="http://fakeimg.pl/440x300/282828/EAE0D0/?text=5" />
            <img src="http://fakeimg.pl/440x300/282828/EAE0D0/?text=6 " />
          </Carousel>
        </div> */}
        {/* <div>
          今天是{year}年{month}月{day}日
        </div>
        <p>today's weather</p>
        {this.props.weather.weather} at {this.props.weather.cityName}
        <img
          src={this.props.weather && this.props.weather.weatherIconUrl}
          alt=""
        /> */}
        {/* <GoogleMap /> */}
        <div className="title_begin">
          <p className="title_begin_1">
            \我的養生之道就是盡量吃「真正」的食物/
          </p>
          <p className="title_begin_2">我對食物的堅持＿只吃最簡單的食物</p>
        </div>
        <div className="intro_about_us clearfix">
          <div className="about_us_img">
            <img
              src={
                this.props.aboutUs
                  ? this.props.aboutUs[0].image1
                  : undefined
              }
              alt=""
            />
          </div>
          <p className="about_us_history">
            {!!this.props.aboutUs && this.props.aboutUs[0].how}
          </p>
        </div>
        <div className="intro_how">
          <div className="title_begin">
            <p className="title_begin_1">
              \發自內心的真誠，以客戶需求為第一優先 /
            </p>
            <p className="title_begin_2">
              提供最佳品質與完善服務為第一項目，並提升品牌的能見度，達到永續經營的目標。
            </p>
          </div>
          <div className="intro_how_content">
            <p className="intro_how_title">{!!this.props.aboutUs && this.props.aboutUs[0].what}</p>
            <p className="intro_how_title">{!!this.props.aboutUs && this.props.aboutUs[0].what2}</p>
            <p className="intro_how_title">{!!this.props.aboutUs && this.props.aboutUs[0].what3}</p>
          </div>
          <div className="intro_how_imgwrap">
            <img
              src={
                this.props.aboutUs ? this.props.aboutUs[0].image3 : undefined
              }
              alt=""
            />
          </div>
          <div className="intro_how_content">
            <p className="intro_how_title">{!!this.props.aboutUs && this.props.aboutUs[0].original}</p>
            <p className="intro_how_title">{!!this.props.aboutUs && this.props.aboutUs[0].original2}</p>
            <p className="intro_how_title">{!!this.props.aboutUs && this.props.aboutUs[0].original3}</p>
            <img
              src={
                this.props.aboutUs
                  ? this.props.aboutUs[0].image2
                  : undefined
              }
              alt=""
            />
          </div>
            <Link className="click_to" to="/products">看更多產品 >>></Link>
        </div>
        <div className="intro_notification">
          <div className="title_begin">
            <p className="title_begin_1">
              \大家的回饋使我們進步的/
          </p>
            <p className="title_begin_2">用心與最專業的態度</p>
          </div>
          <div className="intro_notification_content">
            {notifications && notifications.map((item) => (
              <div className="notification_list">
                <span className="action_time">{moment(item.time.toDate()).fromNow()}</span>
                <span className="username">{item.user} </span>
                <span className="action">{item.content} </span>
                
              </div>
            ))}
            <Link className="click_to" to="/Dashboard">來看看大家寫的評論吧</Link>              
          </div>
        </div>
        <dvi className="intro_googlemap">
          <img src="http://katofarm-f.jp/images/assets/about-illust-map.png" alt=""/>
          <GoogleMap />          
        </dvi>
        <div className="announce">
          <span>來寫評論喔！</span>
            <Link to="/create"></Link>
            <img src="https://michinoeki.kyoto.jp/wp-content/themes/sosimple/img/micchi.png" alt=""/>
        </div>
      </div>
    )
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
    { collection: "notifications", limit:6, orderBy: ["time", "desc"] }
  ])
)(Home);

// https://github.com/FormidableLabs/nuka-carousel




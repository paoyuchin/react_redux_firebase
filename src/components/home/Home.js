import React, { Component } from "react";
import { connect } from "react-redux";
import { MakeReview } from "../../store/actions/reviewActions";
import { Redirect } from "react-router-dom";
import { weatherAction } from "../../store/actions/weatherAction";
import GoogleMap from "./GoogleMap";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import Notification from "../dashboard/Notification";
import { Link } from "react-router-dom";
import "./home.scss";
import "../common.scss";
import Footer from "../layout/Footer";

let moment = require("moment");

class Home extends Component {
  state = {
    position: ""
  };

  componentDidMount() {
    this.props.getWeather();
    window.addEventListener("scroll", this.windowScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.windowScroll);
  }

  windowScroll = () => {
    const scroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    this.setState({
      position: scroll
    });
    if(this.state.position <= 300){
      console.log('hi')
    }
  };

  render() {
    const { notifications } = this.props;
    const year = moment().year();
    const month = moment().format("MM");
    const day = moment().format("DD");
    return (
      <div className="home body_body_color">
        <div className="index_info">
          <h2 className="color_03">#微養生飲食</h2>
          <p className="color_01">
            今天是 {day}/{month}/{year}
          </p>
          <p className="color_02">
            你所在地方的天氣：{this.props.weather.weather}{" "}
            <img
              src={this.props.weather && this.props.weather.weatherIconUrl}
              alt=""
            />
            <span className="color_03">{this.props.weather.tempeture}°C</span>
          </p>
        </div>
        {/* 1 */}
        <div className="title_begin">
          <p className="title_begin_2">
            安心安全、ちいさな子どもから食べられる作物づくり。
          </p>
        </div>
        <div className="anounce fixed_size clearfix">
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4 float-left">
            <div className="card">
              <img
                src="https://haranoujyo.com/assets/img/top/strengths_03.svg"
                alt=""
              />
              <h3>歴史ある無農薬・無化学肥料</h3>
              <p>35年間無農薬、無化学肥での栽培方法を続けております。</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4 float-left">
            <div className="card">
              <img
                src="https://haranoujyo.com/assets/img/top/strengths_02.svg"
                alt=""
              />
              <h3>歴史ある無農薬・無化学肥料</h3>
              <p>35年間無農薬、無化学肥での栽培方法を続けております。</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4 float-left">
            <div className="card">
              <img
                src="https://haranoujyo.com/assets/img/top/strengths_03.svg"
                alt=""
              />
              <h3>歴史ある無農薬・無化学肥料</h3>
              <p>35年間無農薬、無化学肥での栽培方法を続けております。</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4 float-left">
            <div className="card">
              <img
                src="https://haranoujyo.com/assets/img/top/strengths_04.svg"
                alt=""
              />
              <h3>歴史ある無農薬・無化学肥料</h3>
              <p>35年間無農薬、無化学肥での栽培方法を続けております。</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4 float-left">
            <div className="card">
              <img
                src="https://haranoujyo.com/assets/img/top/strengths_05.svg"
                alt=""
              />
              <h3>歴史ある無農薬・無化学肥料</h3>
              <p>35年間無農薬、無化学肥での栽培方法を続けております。</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4 float-left">
            <div className="card">
              <img
                src="https://haranoujyo.com/assets/img/top/strengths_06.svg"
                alt=""
              />
              <h3>歴史ある無農薬・無化学肥料</h3>
              <p>35年間無農薬、無化学肥での栽培方法を続けております。</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4 float-left">
            <div className="card">
              <img
                src="https://haranoujyo.com/assets/img/top/strengths_07.svg"
                alt=""
              />
              <h3>歴史ある無農薬・無化学肥料</h3>
              <p>35年間無農薬、無化学肥での栽培方法を続けております。</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4 float-left">
            <div className="card">
              <img
                src="https://haranoujyo.com/assets/img/top/strengths_08.svg"
                alt=""
              />
              <h3>歴史ある無農薬・無化学肥料</h3>
              <p>35年間無農薬、無化学肥での栽培方法を続けております。</p>
            </div>
          </div>
        </div>
        <div className="title_begin">
          <p className="title_begin_1">
            \我的養生之道就是盡量吃「真正」的食物/
          </p>
          <p className="title_begin_2">我對食物的堅持＿只吃最簡單的食物</p>
        </div>
        <div className="clearfix fixed_size family_intro">
          <div className="family_img float-left">
            <img
              src={
                this.props.aboutUs ? this.props.aboutUs[0].image1 : undefined
              }
              alt=""
            />
          </div>
          <p className="family_content float-left">
            {!!this.props.aboutUs && this.props.aboutUs[0].how}
          </p>
        </div>
        <div className="bgc" />
        {/* 3 產品*/}
        <div className="intro_product">
          <div className="title_begin">
            <p className="title_begin_1">
              \發自內心的真誠，以客戶需求為第一優先 /
            </p>
            <p className="title_begin_2">
              提供最佳品質與完善服務為第一項目，並提升品牌的能見度，達到永續經營的目標。
            </p>
          </div>
          <div className="product_box">
            <div className="col-md-4 product">
              <img
                className="product_img"
                src="https://haranoujyo.com/wp/wp-content/uploads/2019/01/01_雑穀畑.jpg"
                alt=""
              />
              <span className="product_1">
                <img
                  className="product_icon"
                  src="https://haranoujyo.com/assets/img/common/rank_01.svg"
                  alt=""
                />
                提供最佳品質與完善服務為第一項目
              </span>
            </div>
            <div className="col-md-4 product">
              <img
                className="product_img"
                src="https://haranoujyo.com/wp/wp-content/uploads/2019/02/05mochimugi_yuge.jpg"
                alt=""
              />
              <span className="product_1">
                <img
                  className="product_icon"
                  src="https://haranoujyo.com/assets/img/common/rank_02.svg"
                  alt=""
                />
                提供最佳品質與完善服務為第一項目
              </span>
            </div>
            <div className="col-md-4 product">
              <img
                className="product_img"
                src="https://haranoujyo.com/wp/wp-content/uploads/2019/01/01_雑穀畑.jpg"
                alt=""
              />
              <span className="product_1">
                <img
                  className="product_icon"
                  src="https://haranoujyo.com/assets/img/common/rank_03.svg"
                  alt=""
                />
                提供最佳品質與完善服務為第一項目
              </span>
            </div>
          </div>
          <div className="see_more">
            <Link className="click_to" to="/products">
              看更多產品 >>>
            </Link>
          </div>
        </div>
        <div className="intro_notification m_t_15">
          <div className="title_begin">
            <p className="title_begin_1">最新留言推波區</p>
          </div>
          <div className="intro_notification_content">
            {notifications &&
              notifications.map(item => (
                <div className="notification_list">
                  <span className="action_time">
                    {moment(item.time.toDate()).fromNow()}
                  </span>
                  <span className="username">{item.user} </span>
                  <span className="action">{item.content} </span>
                </div>
              ))}
            <div className="see_more">
              <Link className="click_to" to="/Dashboard">
                來看看大家寫的評論吧
              </Link>
            </div>
          </div>
        </div>
        <div className="intro_googlemap">
          <h4>我們在這裡</h4>
          <div className="googlemap_wrap">
            <img
              className="google_map_plant"
              src="http://katofarm-f.jp/images/assets/about-illust-map.png"
              alt=""
            />
            <GoogleMap />
          </div>
        </div>
        <Link className="create_commit" to="/MakeReview">
          <span>來寫評論喔！</span>
          <img
            src="https://michinoeki.kyoto.jp/wp-content/themes/sosimple/img/micchi.png"
            alt=""
          />
        </Link>
        <Footer />
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
)(Home);

// https://github.com/FormidableLabs/nuka-carousel
// https://react-bootstrap.github.io/components/carousel/

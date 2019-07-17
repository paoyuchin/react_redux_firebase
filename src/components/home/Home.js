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
import { FaCookie } from "react-icons/fa";


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
    console.log(this.state.position)
    // // if(this.state.position >= 962){

    // // }
  };

  render() {
    const { notifications } = this.props;
    const year = moment().year();
    const month = moment().format("MM");
    const day = moment().format("DD");
    return (
      <div className="home body_body_color">
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
                src={
                  this.props.weather && this.props.weather.weatherIconUrl
                }
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
        {/* 1 */}
        <div className="title_begin">
          <p className="title_begin_1">
            <FaCookie />
            小資族與媽媽們最喜愛的養生穀米粥
          </p>
        </div>
        <div className="anounce fixed_size clearfix">
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4 float-left">
            <div className="card">
              <img
                src="https://haranoujyo.com/assets/img/top/strengths_03.svg"
                alt=""
              />
              <h3>分享真正食物的價值</h3>
              <p>
                每天凌晨的早上，排頭都還看得到月亮時，我們的爐火已開啟！想傳達的就是就是想分享真正的食物價值
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4 float-left">
            <div className="card">
              <img
                src="https://haranoujyo.com/assets/img/top/strengths_02.svg"
                alt=""
              />
              <h3>自己種的稻米自己煮</h3>
              <p>
                親手由老闆與老闆娘親自下海，不放心交給外人來處理，就怕漏掉一點點的疏失
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4 float-left">
            <div className="card">
              <img
                src="https://haranoujyo.com/assets/img/top/strengths_03.svg"
                alt=""
              />
              <h3>每一口就像談戀愛會上癮</h3>
              <p>
                通常來一次後，很常會看到二訪的顧客，買著買著就變成了好朋友，開玩笑說吃了真的很有談戀愛的感覺
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4 float-left">
            <div className="card">
              <img
                src="https://haranoujyo.com/assets/img/top/strengths_04.svg"
                alt=""
              />
              <h3>最愛與媽媽們約會的穀米粥</h3>
              <p>
                上午很常會有媽媽們來特地買我們的穀米粥，最傳統的古米粥原來就是媽媽們最喜歡的味道啊
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4 float-left">
            <div className="card">
              <img
                src="https://haranoujyo.com/assets/img/top/strengths_05.svg"
                alt=""
              />
              <h3>在地嘉義人一致推薦</h3>
              <p>
                左鄰右舍都好喜歡我們煮的粥，都會「偷偷的」請我們先保留幾一些讓，每個吃過的在地人都口耳相傳，價格很親民的養生粥！
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4 float-left">
            <div className="card">
              <img
                src="https://haranoujyo.com/assets/img/top/strengths_06.svg"
                alt=""
              />
              <h3>網美網紅來嘉義必訪</h3>
              <p>
                嘉義是一個文青之地，有著很多美食與文化的地方，透過不少網路的介紹，不少「網紅」都會拿著我們的粥照相或自拍，起出老闆娘覺得很困惑，不過原來這就是網美在做的事啊！
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4 float-left">
            <div className="card">
              <img
                src="https://haranoujyo.com/assets/img/top/strengths_07.svg"
                alt=""
              />
              <h3>嘉義必吃早餐！全十穀粥</h3>
              <p>
                「每天一碗十穀粥，健康長壽多更多」好吃到不會覺得是養生十穀粥，放下罪惡的零食們，來一碗十穀粥吧
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4 float-left">
            <div className="card">
              <img
                src="https://haranoujyo.com/assets/img/top/strengths_08.svg"
                alt=""
              />
              <h3>手工多種口味醇奶酪</h3>
              <p>
                我們還滿足了你吃想吃甜點的慾望！連甜點都是我們手工做的醇奶酪！我特別推薦紅豆奶酪口味
              </p>
            </div>
          </div>
        </div>
        <div className="title_begin">
          <p className="title_begin_1">
            <FaCookie />
            年輕八年級生最重視的養生計畫
          </p>
        </div>
        <div className="clearfix fixed_size family_intro">
          <div className="family_img float-left">
            <img
              src={
                this.props.aboutUs
                  ? this.props.aboutUs[0].image1
                  : undefined
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
              <FaCookie />
              在地嘉義人最推薦的前三名食物！
            </p>
          </div>
          <div className="product_box">
            <div className="col-md-4 product">
              <img
                className="product_img"
                src="https://healthydiary.org/wp-content/uploads/2017/10/1466651727320.jpg"
                alt=""
              />
              <span className="product_1">
                <img
                  className="product_icon"
                  src="https://haranoujyo.com/assets/img/common/rank_01.svg"
                  alt=""
                />
                穀米粥
              </span>
            </div>
            <div className="col-md-4 product">
              <img
                className="product_img"
                src="https://cp1.douguo.com/upload/caiku/6/7/5/yuan_672859a165b3e42edc375a690d6f7bc5.jpg"
                alt=""
              />
              <span className="product_1">
                <img
                  className="product_icon"
                  src="https://haranoujyo.com/assets/img/common/rank_02.svg"
                  alt=""
                />
                全十穀粥
              </span>
            </div>
            <div className="col-md-4 product">
              <img
                className="product_img"
                src="http://www.yinpo1939.com.tw/proimages/sr/pudding/%E7%B4%85%E8%B1%86%E5%A5%B6%E9%85%AA-%E9%8A%80%E6%B3%A2%E5%B8%83%E4%B8%81%20(1).jpg"
                alt=""
              />
              <span className="product_1">
                <img
                  className="product_icon"
                  src="https://haranoujyo.com/assets/img/common/rank_03.svg"
                  alt=""
                />
                純鮮奶酪
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
            <p className="title_begin_1">
              <FaCookie />
              饕客留言
            </p>
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
        <Link className={`create_commit ${this.state.position >= 980 ? 'd-no': 'null'}`} to="/MakeReview">
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

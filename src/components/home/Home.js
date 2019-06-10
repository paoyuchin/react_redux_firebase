
import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";
import { weatherAction } from "../../store/actions/weatherAction";
import GoogleMap from "./GoogleMap";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import Slider from "react-slick";



class Home extends Component {
  componentDidMount() {
    this.props.getWeather();
  }
  render() {
    var settings = {
      dots: false,
      autoplay: true,
      // autoplaySpeed: 500
    };
    return (
      <React.Fragment>
        <p>today's weather</p>
        {/* <GoogleMap /> */}
        <Slider {...settings}>
          <div>
            <img src="http://fakeimg.pl/440x300/282828/EAE0D0/?text=1" />
          </div>
          <div>
            <img src="http://fakeimg.pl/440x300/282828/EAE0D0/?text=2" />
          </div>
          <div>
            <img src="http://fakeimg.pl/440x300/282828/EAE0D0/?text=3" />
          </div>
          <div>
            <img src="http://fakeimg.pl/440x300/282828/EAE0D0/?text=4" />
          </div>
        </Slider>
        <h5>來源:
          <p>{!!this.props.aboutUs && this.props.aboutUs[0].how}</p>
          <img src={this.props.aboutUs ? this.props.aboutUs[0].image1 : undefined} alt=""/>
        </h5>
        <h5>歷史:
          <p>{!!this.props.aboutUs && this.props.aboutUs[0].original}</p>
          <img src={this.props.aboutUs ? this.props.aboutUs[0].image2 : undefined} alt=""/>
          
        </h5>
        <h5>什麼:
          <p>{!!this.props.aboutUs && this.props.aboutUs[0].what}</p>
          <img src={this.props.aboutUs ? this.props.aboutUs[0].image3 : undefined} alt=""/>          
        </h5>
        {/* <GoogleMap /> */}
      </React.Fragment>
    );
  }
}

const mapStateToPros = state => {
  console.log('state', state);
  return {
    weather: state.weather,
    aboutUs: state.firestore.ordered.aboutus
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
  ),firestoreConnect([{ collection: "aboutus" }])
)(Home);

import React from "react";
import "../common.scss";
import Carousel from "react-bootstrap/Carousel";

const IndexHeader = () => {
  return (
    <div>
      <p class="index_carousel_bg">
        <div className="circle"></div>
				</p>
      <Carousel
        fade={true}
        pauseOnHover={false}
        controls={false}
        indicators={false}
        interval={1000}
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
};

export default IndexHeader;

// https://react-bootstrap.github.io/components/carousel/

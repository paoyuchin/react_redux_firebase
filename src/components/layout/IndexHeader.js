import React from "react";
import "../common.scss";
import Carousel from 'react-bootstrap/Carousel'



const IndexHeader = () => {
  return (
    <Carousel
      fade={true}
      pauseOnHover={false}
      controls={false}
      indicators={false}
      interval={500000}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DXIOzMs_M9dh360rf3NfJLW60StI1Eid6diynse_VEJvceBWcw"
          alt="First slide"
        />
      </Carousel.Item>
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
  );
};

export default IndexHeader;


// https://react-bootstrap.github.io/components/carousel/

// clearTimeout(this.timer);


// this.timer = setTimeout(() => {
//   console.log('hi')

// }, 1000);
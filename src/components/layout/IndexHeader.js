import React from "react";
import "../common.scss";
import Carousel from "nuka-carousel";

const IndexHeader = () => {
  return (
    <div className="IndexHeader">
      <div className="aa">
        <Carousel
          autoplay={true}
          autoplayInterval={1000}
          // autoGenerateStyleTag={true}
          // opacityScale={0.65}
          transitionMode="scroll3d"
          // opacityScale="0.65"
          zoomScale={0.5}
          withoutControls={true}
          pauseOnHover={false}
        >
          <img src="https://react-slideshow.herokuapp.com/images/slide_2.jpg" />
          <img src="http://fakeimg.pl/440x300/282828/EAE0D0/?text=2" />
          <img src="http://fakeimg.pl/440x300/282828/EAE0D0/?text=3" />
          <img src="http://fakeimg.pl/440x300/282828/EAE0D0/?text=4" />
          <img src="http://fakeimg.pl/440x300/282828/EAE0D0/?text=5" />
          <img src="http://fakeimg.pl/440x300/282828/EAE0D0/?text=6 " />
        </Carousel>
      </div>
    </div>
  );
};

export default IndexHeader;

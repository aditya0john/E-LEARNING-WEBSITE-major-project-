import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  let images = {
    1: "/images/award1.jpg",
    2: "/images/award2.jpg",
    3: "/images/award3.jpg",
  };

  const settings = {
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const imageElements = Object.keys(images).map((key) => (
    <div key={key}>
      <img
        src={images[key]}
        className="p-3 image-resize"
        alt={`Award ${key}`}
      />
    </div>
  ));

  return (
    <div className="body">
      <div>
        {/* <img src="/images/logo.png" alt="image" className="image-change" /> */}
        <span>
          <p className="hdg flex justify-center items-center text-black">
            GALLERY
          </p>
        </span>
      </div>
      <Slider {...settings} className="overflow-hidden">
        {imageElements}
      </Slider>
    </div>
  );
}

export default Carousel;

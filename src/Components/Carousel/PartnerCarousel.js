
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import css from "../Carousel/PartnerCarousel.css"
import PartnerCarousel1 from "../../Assets/PartnerCarousel (1).png"
import PartnerCarousel2 from "../../Assets/PartnerCarousel (2).png"
import PartnerCarousel3 from "../../Assets/PartnerCarousel (3).png"
import PartnerCarousel4 from "../../Assets/PartnerCarousel (4).png"

const PartnerCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container1">
      <Slider {...settings}>
        <div className="slide1">
          <div className="card1">
          <img src={PartnerCarousel1} alt="" />
          </div>
        </div>
        <div className="slide1">
          <div className="card1">
          <img src={PartnerCarousel2} alt="" />
          </div>
        </div>
        <div className="slide1">
          <div className="card1">
            <img src={PartnerCarousel3} alt="" />
          </div>
        </div>
        <div className="slide1">
          <div className="card1">
          <img src={PartnerCarousel4} alt="" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default PartnerCarousel;

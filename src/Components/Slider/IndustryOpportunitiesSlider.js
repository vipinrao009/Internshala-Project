// IndustryOpportunitiesSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './IndustryOpportunitiesSlider.css'; // Custom CSS for styling
import logo from "../../Assets/Course logo.png"

const IndustryOpportunitiesSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <div className="slider-container">
      <h1>Industry Opportunities after Course Completion</h1>
      <Slider {...settings}>
        <div className="slide">
          <div className="card">
            <img className='logo' src={logo} alt="" />
            <h3>Cybersecurity Analyst</h3>
            <p>Analyzes cyber threats using AI tools, monitors security systems, and recommends solutions to enhance network safety.</p>
          </div>
        </div>
        <div className="slide">
          <div className="card">
            <img className='logo' src={logo} alt="" />
            <h3>Penetration Tester</h3>
            <p>Uses AI to identify and exploit vulnerabilities in systems, ensuring robustness against potential cyberattacks.</p>
          </div>
        </div>
        <div className="slide">
          <div className="card">
            <img className='logo' src={logo} alt="" />
            <h3>Security Researcher</h3>
            <p>Investigates AI-driven security solutions, explores emerging threats, and develops cybersecurity defense mechanisms.</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default IndustryOpportunitiesSlider;

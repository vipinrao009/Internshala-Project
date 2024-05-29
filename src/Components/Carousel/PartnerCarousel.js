import React from 'react'
import css from "../Carousel/PartnerCarousel.css"
import PartnerCarousel1 from "../../Assets/PartnerCarousel (1).png"
import PartnerCarousel2 from "../../Assets/PartnerCarousel (2).png"
import PartnerCarousel3 from "../../Assets/PartnerCarousel (3).png"
import PartnerCarousel4 from "../../Assets/PartnerCarousel (4).png"

const PartnerCarousel = () => {
    return (
        <div className="partner-carousel-container">
        <div className="partner-carousel">
        <hr className="carousel-divider"></hr>
          <button className="carousel-control left">&lt;</button>
            <div className="carousel-images"><img src={PartnerCarousel1} alt="NetCom Learning" /></div>
            <div className="carousel-images"><img src={PartnerCarousel2} alt="Fast Lane" /></div>
            <div className="carousel-images"><img src={PartnerCarousel3} alt="LLPA" /></div>
            <div className="carousel-images"><img src={PartnerCarousel4} alt="Compu Education" /></div>
          <button className="carousel-control right">&gt;</button>
          <hr className="carousel-divider"></hr>
        </div>
        
        </div>
      );
    }

export default PartnerCarousel

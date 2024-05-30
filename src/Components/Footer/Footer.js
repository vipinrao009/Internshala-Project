import React from 'react';
import './Footer.css';
import logo from "../../Assets/Logo.png"
import footer from "../../Assets/Object.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faInstagram, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-section">
          <img src={logo} alt="AI Certs Logo" className="footer-logo" />
          <p className="footer-description">AI & Blockchain Certifications!</p>
          <div className="footer-section newsletter-section">
          <h3>Newsletter Signup</h3>
          <div className="newsletter-form">
            <FontAwesomeIcon className='icn' icon={faEnvelope} /> 
            <input  type="email" placeholder="Enter Your Email Address" />
            <button type="submit">→</button>
          </div>
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
        </div>
        </div>

        <div className="footer-section about-section">
          <h3>About</h3>
          <ul>
            <li><a href="#">Why AI Certs</a></li>
            <li><a href="#">Accreditation</a></li>
            <li><a href="#">Meet Our Team</a></li>
            <li><a href="#">Trademarks</a></li>
            <li><a href="#">Articles</a></li>
            <li><a href="#">Press Release</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section certifications-section">
          <h3>Certifications</h3>
          <ul>
            <li><a href="#">AI+ Professional™</a></li>
            <li><a href="#">AI+ Technical™</a></li>
            <li><a href="#">Blockchain+ Professional™</a></li>
            <li><a href="#">Blockchain+ Technical™</a></li>
            <li><a href="#">View All</a></li>
          </ul>
        </div>

        <div className="footer-section authorized-section">
          <h3>Authorized</h3>
          <ul>
            <li><a href="#">Authorized Partners</a></li>
            <li><a href="#">Authorized Trainers</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © AI CERTs™, Inc. All Rights Reserved</p>
        <img src={footer} alt="" />
      </div>
    </footer>
  );
};

export default Footer;

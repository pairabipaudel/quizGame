import React from 'react';
import insta_logo from './img/insta_logo.png';
import tiktok_logo from './img/tiktok_logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer_full_container">
      <div className="contact_us_container">
        <p className="contact_title">Contact Us:</p>

        <div className="social_media_icons">
          <img className="insta_logo" src={insta_logo} alt="Instagram logo" />
          <img className="tiktok_logo" src={tiktok_logo} alt="Tiktok logo" />
        </div>
      </div>

      <div className="about_us_container">
        <h4 >About Us</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p> 
      </div>

      <div className="copy_right_container">
        <p>© 2024 Quiz App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Welcome to Satyam-OTT Platform, where entertainment meets boundless
          horizons. Dive into a world of limitless stories, where every screen
          unlocks a new adventure. Immerse yourself in a universe of exclusive
          originals, blockbuster movies,Best OTT and binge-worthy series,Also
          Visit on my Youtube Channel,Link is Present on Youtube Icon.
        </div>
        <div className="socialIcons">
          <a href="https://www.youtube.com/@techy_satyam" target="_blank">
            <span className="icon">
              <FaYoutube />
            </span>
          </a>
          <a href="https://www.instagram.com/techy_satyam_/" target="_blank">
            <span className="icon">
              <FaInstagram />
            </span>
          </a>
          <a href="twitter.com/Techy_Satyam" target="_blank">
            <span className="icon">
              <FaTwitter />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/satyam-gupta-9580141b9/"
            target="_blank"
          >
            <span className="icon">
              <FaLinkedin />
            </span>
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;

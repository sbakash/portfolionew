import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Akash Sb</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/"> License</a>
            </li> 
        </ul>


        <span className="footer__copy">
        </span>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer({ isLoaded }) {
  return (
    <div className="footer">
      <div className="about">
        <div className="about-grid-one">
          <div>
            <p>Matthew Almeida</p>
            <a href="https://github.com/ImTheChosen0ne">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/matthew-almeida-103425183/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <div>
            <p>Sheena Gupta</p>
            <a href="https://github.com/coderaries12">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/sheena1204/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="about-grid-two">
          <div>
            <p>Jen Liu</p>
            <a href="https://github.com/JENLIU2023">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/your-linkedin-profile">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <div>
            <p>Chris Thibault</p>
            <a href="https://github.com/xShirokuma">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="inspired">
        <div>
          <h3>
            <i className="fa-regular fa-copyright"></i>2023 Shopsy inspired by Esty
          </h3>
        </div>
        <div>
          <div>Made with:</div>
          <div className="madeIcons">
            <i className="fa-brands fa-react"></i>
            <i className="fa-brands fa-html5"></i>
            <i className="fa-brands fa-css3-alt"></i>
            <i className="fa-brands fa-square-js"></i>
            <i className="fa-brands fa-python"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

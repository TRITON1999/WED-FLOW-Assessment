import React from "react";
import "./Header.css";

let imgurl =
  "https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/62fcc22fac4aca55d2749c6c_Colour_Horizontal.png";
const Header = () => {
  return (
    <div className="Header">
      <div className="as">
        <img src={imgurl} alt="company logo" />
      </div>
      <div className="con">
        <div className="pricing">Pricing</div>
        <div className="product">Product</div>
        <div className="integrations">
          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Integrations
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <div className="grid1col">
              <div className="selected">Team Management</div>
              <div className="selected">Video Conferencing</div>
              <div className="selected">Calendar</div>
              <div className="selected">Dialer</div>
              <div className="selected">CRM</div>
              </div>
            </div>
          </div>
        </div>
        <div className="solutions">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Solutions
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <div className="grid2col">
                <div className="selected">For Account Execs</div>
                <div className="selected">Sales Onboarding</div>
                <div className="selected">For Sales Managers</div>
                <div className="selected">Sales Training</div>
                <div className="selected">For Sales Leaders</div>
                <div className="selected">Process Monitoring</div>
                <div className="selected">Market Intelligence</div>
                <div className="selected">Sales Strategy</div>
                <div className="selected">People Intelligence</div>
                <div className="selected">Meeting Intelligence</div>
                <div className="selected">Sales Enablement</div>
                <div className="selected">Quality Management</div>
              </div>
            </div>
          </div>
        </div>
        <div className="resources">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Resources
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <div className="grid1col">
              <div className="selected">Blogs</div>
              <div className="selected">E-book</div>
              <div className="selected">News</div>
              <div className="selected">Case studies</div>
              <div className="selected">Sales Gambit Podcast</div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutus">About Us</div>
      </div>
      <div className="butt">
        <button className="b1">Book a Demo</button>
        <button className="b2">Sign Up</button>
      </div>
    </div>
  );
};

export default Header;

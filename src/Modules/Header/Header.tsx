import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header_wrapper">
          <div className="header_left">
            <div className="header_left_logo">
              <img
                src="https://www.gritdigitech.com/assets/img/logo-icon.png"
                alt="Logo"
              />
            </div>
            <div className="brand_name_container">
              <span>GR</span>
              <span className="industry">IT</span>
              <span className="technology">DIGITECH</span>
            </div>
          </div>
          <div className="header_right">
            <a href="javascript:void(0)" className="educator">
              Educator
            </a>
            <a href="javascript:void(0)" className="market_place">
              Marketplace
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

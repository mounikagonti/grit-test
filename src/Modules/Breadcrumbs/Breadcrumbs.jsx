import React from "react";

const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <div className="breadcrumbs_wrapper">
          <div className="breadcrumbs_content">
            <a href="javascript:void(0)" className="home">
              Home
            </a>
            <div className="slash">/</div>
            <a href="javascript:void(0)" className="lass">
              Lass
            </a>
            <div className="slash">/</div>
            <a href="javascript:void(0)" className="learner">
              Learner
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;

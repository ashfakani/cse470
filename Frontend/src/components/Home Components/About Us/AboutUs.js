import React from "react";
import group from "../../../images/File3568-min.jpg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="d-flex justify-content-center">
      <div style={{ marginTop: "8%" }} className="row w-75 ">
        <div className="col-md-6 ">
          <img src={group} alt="" className="img-fluid" />
        </div>
        <div className="col-md-6  ">
          <div className="ms-5">
            <h1 className="heading-txt">
              Who We <span className="heading-portion">Are</span>{" "}
            </h1>
            <label className="label-text">
              {" "}
              Lorem ipsum dolor sit amet, consectetur{" "}
            </label>
            <div>
              <p className="p-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident
              </p>
              <div className="btn me-2">
                <a>
                  <span>View More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

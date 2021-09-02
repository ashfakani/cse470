import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://celluloid-studios-server.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const history = useHistory();
  const handlePlan = (id) => {
    history.push(`/bookService/${id}`);
  };
  return (
    <div style={{ marginTop: "8%" }}>
      <h1 className="text-center mt-5 heading-txt">
        Our <span className="heading-portion">Services</span>{" "}
      </h1>
      <div className="d-flex justify-content-center">
        <div className="row w-75 mt-5">
          {services.map((service) => (
            <div className="col-md-4 ">
              <div className="pricing-container p-3">
                <div class="pricing-table">
                  <div class="tb-border"></div>
                  <div class="lr-border"></div>
                  <div class="pricing-inner">
                    <div class="plan-name">
                      <h1>{service.packageName}</h1>
                    </div>
                    <div class="plan-price-container">
                      <p class="plan-price">
                        {service.price}
                        <sup>
                          <small>$</small>
                        </sup>
                      </p>
                    </div>
                    <div class="plan-desc">
                      <p>{service.desc1}</p>
                      <p>{service.desc2}</p>
                      <p>{service.desc3}</p>
                      <p>{service.desc4}</p>
                    </div>
                    <button onClick={() => handlePlan(service._id)}>
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

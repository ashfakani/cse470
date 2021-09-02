import React, { useEffect } from "react";
import "./Testimonials.css";

import { Button, Carousel } from "react-bootstrap";
import { Card } from "react-bootstrap";
import ReactCardCarousel from "react-card-carousel";
import { useState } from "react";

const Testimonials = () => {
  const CONTAINER_STYLE = {
    position: "relative",
    height: "100vh",
    width: "100%",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "middle",
  };
  const CARD_STYLE = {
    height: "350px",
    width: "600px",
    paddingTop: "50px",
    textAlign: "center",
    background: "linear-gradient(112deg, #e3e6e4 50%, antiquewhite 50%)",
    color: "rgba(78, 77, 77, 0.856)",
    fontFamily: "Open Sans",
    fontSize: "1.2rem",
    fontStyle: "italic",
    fontWeight: "bold",
    lineHeight: "2rem",
    textTransform: "uppercase",
    borderRadius: "10px",
    boxSizing: "border-box",
  };
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("https://celluloid-studios-server.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <div style={{ marginTop: "8%" }}>
      <h1 className="text-center heading-txt">
        Our Client <span className="heading-portion">Testimonials</span>{" "}
      </h1>
      <div class="mt-3 testimonial-bg ">
        <div className="overlay">
          <div style={CONTAINER_STYLE}>
            <ReactCardCarousel autoplay={true} autoplay_speed={3500}>
              {testimonials.map((test) => (
                <div style={CARD_STYLE} className="card-style">
                  <img
                    style={{ borderRadius: "50%" }}
                    src={test.image}
                    alt=""
                  />
                  <h5 className="mt-4">{test.name}</h5>
                  <p className="mt-4 ">{test.review} </p>
                </div>
              ))}
            </ReactCardCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

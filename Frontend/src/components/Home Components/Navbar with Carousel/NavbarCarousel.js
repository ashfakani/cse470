import React, { useEffect, useRef, useState } from "react";
import pic1 from "../../../images/DSC_0137-2-compressed.jpg";
import pic2 from "../../../images/DSC_0339-min.jpg";
import pic3 from "../../../images/IMG_5889-2 copy-min.jpg";
import pic4 from "../../../images/ZHO_1187-min.jpg";
import logo from "../../../images/Asset 3-8.png";
import "./NavbarCarousel.css";
import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../Login Components/LoginContextProvider/LoginContextProvider";
import firebase from "firebase/app";
import "firebase/auth";
const NavbarCarousel = () => {
  const [loggedInUser, setLoggedInUser] = useContext(LoginContext);
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const history = useHistory();
  const handleLogin = () => {
    history.push("/login");
  };
  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .catch((err) => {
        console.log(err);
      });
    sessionStorage.removeItem("token");
    setLoggedInUser({});
  };
  return (
    <div>
      <nav
        class="navbar active navbar-expand-lg navbar-light fixed-top"
        style={{
          transition: "1s ease",
          backgroundColor: navBackground ? "black" : "transparent",
        }}
      >
        <div class="container">
          <a class="navbar-brand" href="#">
            <img style={{ height: "100px" }} src={logo} alt="" />
          </a>{" "}
          <button
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            class="navbar-toggler"
            data-target="#navbarSupportedContent"
            data-toggle="collapse"
            type="button"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item active">
                <a class="nav-link text-white">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <Link to="/dashboard" style={{ textDecoration: "none" }}>
                  <a class="nav-link text-white">Dashboard</a>
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  Services
                </a>
              </li>
              {loggedInUser.email ? (
                <li class="nav-item">
                  <a
                    onClick={handleLogout}
                    class="nav-link text-white"
                    style={{ cursor: "pointer" }}
                  >
                    Logout
                  </a>
                </li>
              ) : (
                <li class="nav-item">
                  <a
                    onClick={handleLogin}
                    class="nav-link text-white"
                    style={{ cursor: "pointer" }}
                  >
                    Login
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div
        class="carousel slide"
        data-ride="carousel"
        id="carouselExampleIndicators"
      >
        <ol class="carousel-indicators">
          <li
            class="active"
            data-slide-to="0"
            data-target="#carouselExampleIndicators"
          ></li>
          <li data-slide-to="1" data-target="#carouselExampleIndicators"></li>
          <li data-slide-to="2" data-target="#carouselExampleIndicators"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img alt="First slide" class="d-block w-100" src={pic1} />
            <div class="carousel-caption d-none d-md-block"> </div>
          </div>
          <div class="carousel-item">
            <img alt="Second slide" class="d-block w-100" src={pic2} />
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
          <div class="carousel-item">
            <img alt="Third slide" class="d-block w-100" src={pic3} />
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
          <div class="carousel-item">
            <img alt="Third slide" class="d-block w-100" src={pic4} />
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          data-slide="prev"
          href="#carouselExampleIndicators"
          role="button"
        >
          <span aria-hidden="true" class="carousel-control-prev-icon"></span>{" "}
          <span class="sr-only">Previous</span>
        </a>{" "}
        <a
          class="carousel-control-next"
          data-slide="next"
          href="#carouselExampleIndicators"
          role="button"
        >
          <span aria-hidden="true" class="carousel-control-next-icon"></span>{" "}
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default NavbarCarousel;

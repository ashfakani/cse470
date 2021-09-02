import React from "react";
import AboutUs from "../../components/Home Components/About Us/AboutUs";

import ContactUs from "../../components/Home Components/Contact Us/ContactUs";
import ExploreGallery from "../../components/Home Components/Explore Gallery/ExploreGallery";
import Footer from "../../components/Home Components/Footer/Footer";
import Header from "../../components/Home Components/Header/Header";
import ProfessionalTeam from "../../components/Home Components/Professional Team/ProfessionalTeam";
import Services from "../../components/Home Components/Services/Services";
import Testimonials from "../../components/Home Components/Testimonials/Testimonials";
const Home = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <ExploreGallery />
      <ProfessionalTeam />
      <Services />
      <Testimonials />

      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;

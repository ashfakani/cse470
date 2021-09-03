import React from "react";
import pic1 from "../../../images/team-1-min.jpg";
import pic2 from "../../../images/team-2-min.jpg";
import pic3 from "../../../images/team-3-min.jpg";
import "./ProfessionalTeam.css";
const teamInfo = [
  {
    name: "Ashfak Ahmed Ani",
    Role: "CEO & Core Photographer",
    image: pic2,
  },
  {
    name: "Shahriar Saleh",
    Role: "Core Photographer & Editor",
    image: pic1,
  },
  {
    name: "Mahir Ashhab Taron",
    Role: " Core Photographer & Cinematographer",
    image: pic3,
  },
];

const ProfessionalTeam = () => {
  return (
    <div style={{ marginTop: "8%" }}>
      <h1 className="text-center mt-5 heading-txt">
        Meet Our <span className="heading-portion">Professional Team</span>
      </h1>
      <div className="d-flex justify-content-center">
        <div className="row w-75 container mt-5">
          {teamInfo.map((team) => (
            <div className="col-md-4">
              <div class="content">
                <div class="content-overlay"></div>
                <img class="content-image" src={team.image} />
                <div class="content-details fadeIn-bottom">
                  <h3 class="content-title">{team.name}</h3>
                  <p class="content-text">{team.Role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTeam;

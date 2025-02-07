import React from "react";
import "../styles/Teams.css";
import Navbar from "./Navbar";
const Teams = () => {
  return (
    <div className="teams-page">
      <Navbar />
      <div className="teams-main">
        <div className="teams-cards">
          <div className="teams-card">
            <div className="teams-upper-one"></div>
            <div className="teams-z">R</div>
            <div className="teams-lower">
              <p>Rocket</p>
              <p>Social Media Marketing</p>
            </div>
          </div>
          <div className="teams-card">
            <div className="teams-upper-two"></div>
            <div className="teams-z">R</div>
            <div className="teams-lower">
              <p>Rocket</p>
              <p>Social Media Marketing</p>
            </div>
          </div>
          <div className="teams-card">
            <div className="teams-upper-three"></div>
            <div className="teams-z">R</div>
            <div className="teams-lower">
              <p>Rocket</p>
              <p>Social Media Marketing</p>
            </div>
          </div>
          <div className="teams-card">
            <div className="teams-upper-four"></div>
            <div className="teams-z">R</div>
            <div className="teams-lower">
              <p>Rocket</p>
              <p>Web Dev</p>
            </div>
          </div>
          <div className="teams-card">
            <div className="teams-upper-five"></div>
            <div className="teams-z">R</div>
            <div className="teams-lower">
              <p>Rocket</p>
              <p>AI/ML</p>
            </div>
          </div>
          <div className="teams-card">
            <div className="teams-upper-six"></div>
            <div className="teams-z">R</div>
            <div className="teams-lower">
              <p>Rocket</p>
              <p>R & D</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;

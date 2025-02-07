import React from "react";
import "../styles/Teams.css";
import Navbar from "./Navbar";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { RiPencilLine } from "react-icons/ri";
import { IoMdStats } from "react-icons/io";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
const Teams = () => {
  useGSAP(() => {
    var tl = gsap.timeline();
    tl.from(".teams-card ", {
      y: 30,
      duration: 0.3,
      delay: 0.3,
      opacity: 0,
      stagger: 0.2,
    });
  });
  return (
    <div className="teams-page">
      <Navbar />
      <div className="teams-main">
        <div className="teams-cards">
          <div className="teams-card">
            <div className="teams-upper-one"></div>
            <div className="teams-z teams-one">R</div>
            <div className="teams-lower">
              <h4>Rocket</h4>
              <p>Social Media Marketing</p>
              <p>
                <MdOutlinePeopleAlt /> 13 People
              </p>
              <IoMdStats /> &nbsp;
              <RiPencilLine />
            </div>
          </div>
          <div className="teams-card">
            <div className="teams-upper-two"></div>
            <div className="teams-z teams-two">R</div>
            <div className="teams-lower">
              <h4>Rocket</h4>
              <p>Social Media Marketing</p>
              <p>
                <MdOutlinePeopleAlt /> 13 People
              </p>
              <IoMdStats />
              &nbsp;
              <RiPencilLine />
            </div>
          </div>
          <div className="teams-card">
            <div className="teams-upper-three"></div>
            <div className="teams-z teams-three">R</div>
            <div className="teams-lower">
              <h4>Rocket</h4>
              <p>Social Media Marketing</p>
              <p>
                <MdOutlinePeopleAlt /> 13 People
              </p>
              <IoMdStats />
              &nbsp;
              <RiPencilLine />
            </div>
          </div>
          <div className="teams-card">
            <div className="teams-upper-four"></div>
            <div className="teams-z teams-four">R</div>
            <div className="teams-lower">
              <h4>Rocket</h4>
              <p>Web Dev</p>
              <p>
                <MdOutlinePeopleAlt /> 13 People
              </p>
              <IoMdStats />
              &nbsp;
              <RiPencilLine />
            </div>
          </div>
          <div className="teams-card">
            <div className="teams-upper-five"></div>
            <div className="teams-z teams-five">R</div>
            <div className="teams-lower">
              <h4>Rocket</h4>
              <p>AI/ML</p>
              <p>
                <MdOutlinePeopleAlt /> 13 People
              </p>
              <IoMdStats />
              &nbsp;
              <RiPencilLine />
            </div>
          </div>
          <div className="teams-card">
            <div className="teams-upper-six"></div>
            <div className="teams-z teams-six">R</div>
            <div className="teams-lower">
              <h4>Rocket</h4>
              <p>R & D</p>
              <p>
                <MdOutlinePeopleAlt /> 13 People
              </p>
              <IoMdStats />
              &nbsp;
              <RiPencilLine />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;

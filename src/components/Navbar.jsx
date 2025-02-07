import React from "react";
import "../styles/Navbar.css";
import user from "../assets/user.png";
import edit from "../assets/edit.png";
import events from "../assets/events.png";
import upcoming from "../assets/upcoming.png";
import recent from "../assets/recent.png";
import registered from "../assets/registered.png";
import setting from "../assets/setting.png";
import team from "../assets/team.png";
import community from "../assets/community.png";
import support from "../assets/support.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <div className="profile">
        <Link to="/profile">
          <div className="pfp">
            <img src={user} alt="" />
          </div>
        </Link>
        <div className="username">
          <Link to="/">
            <h3>Pranav</h3>
          </Link>
        </div>
        <div className="edit">
          <Link to="/signup">
            <img src={edit} alt="" />
          </Link>
        </div>
      </div>
      <div className="navbar-options">
        <hr />
        <div className="main">
          <div className="h1">Main</div>
          <div className="calendar">
            <Link to="/">
              <img src={events} alt="" />
              <h1>Events Calendar</h1>
            </Link>
          </div>
          <div className="upcoming">
            <Link to="/upcoming">
              <img src={upcoming} alt="" />
              <h1>Upcoming Events</h1>
            </Link>
          </div>
          <div className="recent">
            <Link to="/recent">
              <img src={recent} alt="" />
              <h1>Recent Events</h1>
            </Link>
          </div>
          <div className="registered">
            <Link to="/registered">
              <img src={registered} alt="" />
              <h1>Registered Events</h1>
            </Link>
          </div>
        </div>
        <div className="Records">
          <div className="h1">Social</div>
          <Link to="/team">
          <div className="team">
            <img src={team} alt="" />
            <h1>Team</h1>
          </div>
          </Link>
          <div className="community">
            <Link to="/community">
              <img src={community} alt="" />
              <h1>Community</h1>
            </Link>
          </div>
        </div>
        <div className="settings">
          <div className="h1">Account Settings</div>
          <div className="setting">
            <img src={setting} alt="" />
            <h1>Settings</h1>
          </div>
          <div className="support">
            <img src={support} alt="" />
            <h1>Support Chat</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

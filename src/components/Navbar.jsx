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
        <div className="pfp">
          <img src={user} alt="" />
        </div>
        <div className="username">
          <Link to="/">
          <h3>Kushagra</h3>
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
            <img src={events} alt="" />
            <h1>Events Calendar</h1>
          </div>
          <div className="upcoming">
            <img src={upcoming} alt="" />
            <h1>Upcoming Events</h1>
          </div>
          <div className="recent">
            <img src={recent} alt="" />
            <h1>Recent Events</h1>
          </div>
          <div className="registered">
            <img src={registered} alt="" />
            <h1>Registered Events</h1>
          </div>
        </div>
        <div className="Records">
          <div className="h1">Social</div>
          <div className="team">
            <img src={team} alt="" />
            <h1>Team</h1>
          </div>
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

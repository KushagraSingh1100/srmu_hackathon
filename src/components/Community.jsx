import React from "react";
import "../styles/Community.css";
import Navbar from "./Navbar";
function Community() {
  return (
  <div className="community-page">
        <Navbar/>
        <div className="community-view">
            <h1>Communities</h1>
            <div className="communities">
                <div className="community-card"><h1>Web Dev</h1></div>
                <div className="community-card"><h1>Web Dev</h1></div>
                <div className="community-card"><h1>Web Dev</h1></div>
                <div className="community-card"><h1>Web Dev</h1></div>
                <div className="community-card"><h1>Web Dev</h1></div>
                <div className="community-card"><h1>Web Dev</h1></div>
                <div className="community-card"><h1>Web Dev</h1></div>
                <div className="community-card"><h1>Web Dev</h1></div>
                <div className="community-card"><h1>Web Dev</h1></div>
            </div>
        </div>
  </div>
  )
}

export default Community;

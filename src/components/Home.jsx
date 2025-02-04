import React from "react";
import "../styles/Home.css";
import Navbar from "./Navbar";
import bell from "../assets/bell.png";
function Home() {
  const today = new Date();
  const month = today.getMonth();
  const date = today.getDate();
  const day = today.getDay();
  const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="home-page">
      <Navbar />
      <div className="homepage">
        <div className="home-top">
          <div className="date">
            <div className="month">
              <h4>
                {date},{monthNames[month]}
              </h4>
            </div>
            <div className="day">
              <h1>{dayNames[day - 1]}</h1>
            </div>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search for an event" />
          </div>
          <div className="notification">
            <img src={bell} alt="" />
          </div>
        </div>
        <div className="home-bottom">
          <div className="events-calendar">
            <div className="past-events">
              <div className="card">
                <div className="tag">
                  <p>#cs</p>
                  <p>#web dev</p>
                </div>
                <div className="event-name">
                  <h1>Hackathon</h1>
                </div>
                <div className="date">
                  <p>
                    {date},{monthNames[month]}
                  </p>
                </div>
                <div className="note">
                  <p>Solo</p>
                </div>
                <div className="registered">
                  <h3>32/50</h3>
                </div>
              </div>
              <div className="card">
                <div className="tag">
                  <p>#cs</p>
                  <p>#web dev</p>
                </div>
                <div className="event-name">
                  <h1>Hackathon</h1>
                </div>
                <div className="date">
                  <p>
                    {date},{monthNames[month]}
                  </p>
                </div>
                <div className="note">
                  <p>Team of 4</p>
                </div>
                <div className="registered">
                  <h3>32/50</h3>
                </div>
              </div>
            </div>
            <div className="inprogress-events">
              <div className="card">
                <div className="tag">
                  <p>#cs</p>
                  <p>#web dev</p>
                </div>
                <div className="event-name">
                  <h1>Hackathon</h1>
                </div>
              </div>
              <div className="card">
                <div className="tag">
                  <p>#cs</p>
                  <p>#web dev</p>
                </div>
                <div className="event-name">
                  <h1>Hackathon</h1>
                </div>
              </div>
              <div className="card">
                <div className="tag">
                  <p>#cs</p>
                  <p>#web dev</p>
                </div>
                <div className="event-name">
                  <h1>Hackathon</h1>
                </div>
              </div>
            </div>
            <div className="upcoming-events">
              <div className="card">
                <div className="tag">
                  <p>#cs</p>
                  <p>#web dev</p>
                </div>
                <div className="event-name">
                  <h1>Hackathon</h1>
                </div>
              </div>
              <div className="card">
                <div className="tag">
                  <p>#cs</p>
                  <p>#web dev</p>
                </div>
                <div className="event-name">
                  <h1>Hackathon</h1>
                </div>
              </div>
              <div className="card">
                <div className="tag">
                  <p>#cs</p>
                  <p>#web dev</p>
                </div>
                <div className="event-name">
                  <h1>Hackathon</h1>
                </div>
              </div>
            </div>
            <div className="registered-events">
              <div className="card">
                <div className="tag">
                  <p>#cs</p>
                  <p>#web dev</p>
                </div>
                <div className="event-name">
                  <h1>Hackathon</h1>
                </div>
              </div>
              <div className="card">
                <div className="tag">
                  <p>#cs</p>
                  <p>#web dev</p>
                </div>
                <div className="event-name">
                  <h1>Hackathon</h1>
                </div>
              </div>
              <div className="card">
                <div className="tag">
                  <p>#cs</p>
                  <p>#web dev</p>
                </div>
                <div className="event-name">
                  <h1>Hackathon</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

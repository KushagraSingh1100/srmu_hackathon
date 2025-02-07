import React from "react";
import Navbar from "./Navbar";
import "../styles/Chatroom.css";
import lady from "../assets/lady.jpg";
import man from "../assets/man.jpg";

const Chatroom = () => {
  return (
    <div className="chat">
      <div>
        <Navbar />
      </div>

      <div className="chatsec">
        <div className="chatting left">
          <img className="imgofperson" src={lady} alt="" />
          <div className="actualchat">
            <p>Hey any up for the hackathon ?</p>
          </div>
        </div>

        <div className="chatting right">
          <div className="actualchat">
            <p>Yeah i'm also looking for a team</p>
          </div>
          <img className="imgofperson" src={man} alt="" />
        </div>
        <div className="chatting right">
          <div className="actualchat">
            <p>You guys could join our team we got place for 2</p>
          </div>
          <img className="imgofperson" src={man} alt="" />
        </div>

        <div className="chatting left">
          <img className="imgofperson" src={lady} alt="" />
          <div className="actualchat">
            <p>Yeah sure ill send you the invite link</p>
          </div>
        </div>
        <div className="chatting right">
          <div className="actualchat">
            <p>Great, lets get this win</p>
          </div>
          <img className="imgofperson" src={man} alt="" />
        </div>

        <div className="typing">
          <input className="textfield" type="text" placeholder="Type Here" />
          <button className="btnsend">Send</button>
        </div>
      </div>

      <div className="friendssec">
        <div className="friends">
          <h1>Members</h1>

          <div className="friendname">
            <ol>
              <li>Vaibhav</li>
              <li>Kushagra</li>
              <li>Hamza</li>
              <li>Achintya</li>
              <li>Arpit</li>
              <li>Haider</li>
            </ol>
          </div>
        </div>

        <div className="trends">
          <h1 className="fonts">Latest Trends</h1>

          <div className="friendname">
            <ol>
              <li>Deepseek</li>
              <li>Free copilot</li>
              <li>Income tax</li>
              <li>Budget</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatroom;

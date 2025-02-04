import React, { useState } from "react";
import "../styles/Signup.css";
import img from "../assets/canva-background.jpg";
import openeye from "../assets/openeye.png";
import closedeye from "../assets/closedeye.png";
function SignUp() {
  const [paseye, setPaseye] = useState(false);
  const [coneye, setConeye] = useState(false);
  return (
    <div className="signup-page">
      <div className="signup-card">
        <div className="signup-img">
          <img src={img} alt="" />
        </div>
        <div className="signup-form">
          <form action="">
            <h1>SignUp</h1>
            <label htmlFor="">Username</label>
            <input required type="text" placeholder="Enter Username" />
            <label htmlFor="">Mobile Number</label>
            <input required type="number" placeholder="Enter mobile number" />
            <label htmlFor="">College ID</label>
            <input required type="text" placeholder="Enter college ID" />
            <label htmlFor="">E-Mail</label>
            <input required type="email" placeholder="Enter e-mail" />
            <label htmlFor="">Password</label>
            <input
              required
              type={paseye == false ? "password" : "text"}
              placeholder="Enter password"
            />
            <img
              className="password"
              onClick={() => setPaseye(!paseye)}
              src={paseye == false ? openeye : closedeye}
              alt=""
            />
            <label htmlFor="">Confirm Password</label>
            <input
              required
              type={coneye == false ? "password" : "text"}
              placeholder="Enter password again"
            />
            <img
              className="confirm"
              onClick={() => setConeye(!coneye)}
              src={coneye == false ? openeye : closedeye}
              alt=""
            />
            <button>SignUp</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

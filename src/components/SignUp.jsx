import React, { useEffect, useState } from "react";
import "../styles/Signup.css";
import openeye from "../assets/openeye.png";
import closedeye from "../assets/closedeye.png";
import KUTE from "kute.js";
import { Link } from "react-router-dom";
function SignUp() {
  const [paseye, setPaseye] = useState(false);
  const [coneye, setConeye] = useState(false);
  useEffect(() => {
    const tween = KUTE.fromTo(
      "#blob1",
      { path: "#blob1" },
      { path: "#blob2" },
      { repeat: 999, duration: 3000, yoyo: true }
    );
    tween.start();
    const tween1 = KUTE.fromTo(
      "#blob3",
      { path: "#blob3" },
      { path: "#blob4" },
      { repeat: 999, duration: 3000, yoyo: true }
    );
    tween1.start();
  }, []);
  return (
    <div className="signup-page">
      <div className="signup-card">
        <svg
          id="visual"
          viewBox="0 0 900 600"
          width="900"
          height="600"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <g transform="translate(442.4541705455785 318.6864169439723)">
            <path
              id="blob1"
              d="M171 -184.5C203.8 -138.1 200.4 -69.1 184 -16.4C167.6 36.3 138.3 72.6 105.4 107.8C72.6 142.9 36.3 177 -17.2 194.2C-70.7 211.4 -141.4 211.8 -167.8 176.6C-194.1 141.4 -176 70.7 -158.4 17.7C-140.7 -35.4 -123.4 -70.7 -97 -117C-70.7 -163.4 -35.4 -220.7 16.9 -237.5C69.1 -254.4 138.1 -230.8 171 -184.5"
              fill="#715DF2"
            ></path>
          </g>
          <g
            transform="translate(450.85365516512684 321.28935794637044)"
            style={{ visibility: "hidden" }}
          >
            <path
              id="blob2"
              d="M118.5 -115C166.4 -70.7 226.7 -35.4 244.4 17.7C262 70.7 237.1 141.4 189.3 172.1C141.4 202.8 70.7 193.4 5.9 187.5C-58.9 181.6 -117.9 179.2 -164.5 148.5C-211.2 117.9 -245.6 58.9 -251 -5.4C-256.4 -69.8 -232.9 -139.5 -186.2 -183.9C-139.5 -228.2 -69.8 -247.1 -17.2 -229.9C35.4 -212.7 70.7 -159.4 118.5 -115"
              fill="#715DF2"
            ></path>
          </g>
        </svg>
        <svg
          id="visual1"
          viewBox="0 0 900 600"
          width="900"
          height="600"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <g transform="translate(442.4541705455785 318.6864169439723)">
            <path
              id="blob3"
              d="M171 -184.5C203.8 -138.1 200.4 -69.1 184 -16.4C167.6 36.3 138.3 72.6 105.4 107.8C72.6 142.9 36.3 177 -17.2 194.2C-70.7 211.4 -141.4 211.8 -167.8 176.6C-194.1 141.4 -176 70.7 -158.4 17.7C-140.7 -35.4 -123.4 -70.7 -97 -117C-70.7 -163.4 -35.4 -220.7 16.9 -237.5C69.1 -254.4 138.1 -230.8 171 -184.5"
              fill="#715DF2"
            ></path>
          </g>
          <g
            transform="translate(450.85365516512684 321.28935794637044)"
            style={{ visibility: "hidden" }}
          >
            <path
              id="blob4"
              d="M118.5 -115C166.4 -70.7 226.7 -35.4 244.4 17.7C262 70.7 237.1 141.4 189.3 172.1C141.4 202.8 70.7 193.4 5.9 187.5C-58.9 181.6 -117.9 179.2 -164.5 148.5C-211.2 117.9 -245.6 58.9 -251 -5.4C-256.4 -69.8 -232.9 -139.5 -186.2 -183.9C-139.5 -228.2 -69.8 -247.1 -17.2 -229.9C35.4 -212.7 70.7 -159.4 118.5 -115"
              fill="#715DF2"
            ></path>
          </g>
        </svg>
        <div className="signup-img">
          <img
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?ga=GA1.1.1816276868.1737550256&semt=ais_hybrid"
            alt=""
          />
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
            <div className="option">
              <Link to="/signin">
                <h3>Already have an accout? SignIn</h3>
              </Link>
            </div>
            <button>SignUp</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

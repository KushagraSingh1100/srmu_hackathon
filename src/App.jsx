import React from "react";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
// import Profile from "./components/Profile";
import Community from "./components/Community";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
        <Routes>
          <Route exact path="/signin" element={<Signin />} />
        </Routes>
        <Routes>
          <Route exact path="/community" element={<Community />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

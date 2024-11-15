import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Weather from "./Weather";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Define the different routes */}
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

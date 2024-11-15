import React from "react";
import Login from "./Components/login.jsx";
import Registration from "./Components/Registration.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./Components/MainLayout.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/registration" element={<Registration />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

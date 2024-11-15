import React from "react";
import { Outlet, Link } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>

          <li>
            <Link to="/registration">Registration</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

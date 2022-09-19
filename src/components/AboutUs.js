import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/", { replace: true });
  };

  return (
    <div>
      <h1>About Us</h1>
      <br />
      <button onClick={clickHandler}>Go Home</button>
      <br />
      <ul>
        <li>
          <Link to="drivers">Drivers</Link>
        </li>
        <li>
          <Link to="passengers">Passengers</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default AboutUs;

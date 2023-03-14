import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="nav-wrapper">
      {/* <div className="nav-left">
        <div className="nav-name">Col</div>
        <span>toggle</span>
      </div> */}
      <div className="nav-right">
        <div className="nav-list">
          <ul style={{ listStyleType: "none" }}>
            <li>Home</li>
            <li>About</li>
            <li>Skill</li>
            <li>Contact</li>

            {/* <button className="button nav-button">Contact us</button> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

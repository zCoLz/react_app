import React from "react";

import "./Navbar.css";
import Scroll from "react-scroll";
import Intro from "../Intro/Intro";
const Navbar = () => {
  // const intro = useRef(null);
  // const about = useRef(null);
  // const skill = useRef(null);
  // const contact = useRef(null);
  // const srollToSection = (elementRef) => {
  //   window.srollTo({
  //     top: elementRef.current.offsetTop,
  //     behavior: "smooth",
  //   });
  // };
  var Link = Scroll.Link;

  return (
    <div className="nav-wrapper">
      {/* <div className="nav-left">
        <div className="nav-name">Col</div>
        <span>toggle</span>
      </div> */}
      <div className="nav-right">
        <div className="nav-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to="Navbar"
              offset={50}
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link
              spy={true}
              to="About"
              smooth={true}
              activeClass="activeClass"
              offset={0}
            >
              <li>About</li>
            </Link>

            <Link spy={true} to="Skill" smooth={true} activeClass="activeClass">
              <li>Skill</li>
            </Link>

            <Link
              spy={true}
              to="Contact"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Contact</li>
            </Link>

            {/* <button className="button nav-button">Contact us</button> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

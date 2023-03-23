import React from "react";
import "./About.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "../About/CV_Intern.pdf";
const About = () => {
  return (
    <div className="About" id="About">
      {/* Left Side */}
      <div className="POMySelf">
        <span>Things I Am </span>
        <span>Proud Of Myself</span>
        <spane>
          Here's what I've achieved in my academic endeavors
          <br />
          I'm proud of it
        </spane>
        <a href={Resume} download>
          <button className="button s-button">DownLoad CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* Right Side */}
      <div className="cards">
        <div style={{ left: "22rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Teamwork"}
            detail={
              "Coordinate with all members to ensure the best progress and efficiency"
            }
          />
        </div>
        <div style={{ top: "12rem", left: "1rem" }}>
          <Card
            emoji={Humble}
            heading={"Self Learning"}
            detail={"By being curious and set learning goals"}
          />
        </div>
        <div style={{ top: "21rem", left: "19rem" }}>
          <Card
            emoji={Glasses}
            heading={"Web development"}
            detail={
              "I am a  web developer ReactJS, HTML, CSS, Javascrip, Figma "
            }
          />
        </div>
      </div>
    </div>
  );
};

export default About;

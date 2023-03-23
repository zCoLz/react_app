import React from "react";
import JavaScript from "../../img/Javascript.png";
import HTML from "../../img/html.png";
import Css from "../../img/css.png";
import ReactJS from "../../img/react.png";
import Git from "../../img/git.png";
import "./Skill.css";
const Skill = () => {
  return (
    <div className="Skills" id="Skill">
      <div className="POMySelf">
        <span>My Skills</span>
        <span>In programming</span>
        <spane>
          These are the skills I learned in school and I learned on my
          <br />
          own during my years of school and internship
        </spane>

        {/* <button className="button s-button">Hire Me</button> */}

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* Right side */}
      <div className="w-right"></div>
      <div className="w-mainCircle">
        <div className="w-secCircle">
          <img src={HTML} alt="" />
        </div>
        <div className="w-secCircle">
          <img src={Css} alt="" />
        </div>
        <div className="w-secCircle">
          <img src={JavaScript} alt="" />
        </div>
        <div className="w-secCircle">
          <img src={Git} alt="" />
        </div>
        <div className="w-secCircle">
          <img src={ReactJS} alt="" />
        </div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
      {/* Background Circle */}
    </div>
  );
};

export default Skill;

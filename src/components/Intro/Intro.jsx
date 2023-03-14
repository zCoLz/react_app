import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Facebook from "../../img/iconFace.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import Glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-name">
          <span>Hy! I Am</span>
          <span>CoL Trần</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <button className="button intro-button">Hire me</button>
        <div className="intro-icons">
          <a href="https://github.com/zCoLz">
            <img src={Github} alt="" />
          </a>
          <img src={Facebook} alt="" />
          <a href="https://www.instagram.com/col_2902/">
            <img src={Instagram} alt="" />
          </a>
          {/* <img src={LinkedIn} alt="" /> */}
        </div>
      </div>

      <div className="intro-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={Glassesimoji} alt="" />

        <div style={{ top: "4%", left: "68%" }}>
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }}>
          <FloatingDiv image={thumbup} txt1="Make beautiful" txt2="UI/UX" />
        </div>
        {/* blur divs */}
        <div className="blur" style={{ background: "rbg(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;

import React from "react";
import phone from "../../img/phone.png";
import mail from "../../img/mail.png";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="Contacts ct" id="Contact">
      <div className="Contact_content ct ">
        <h2 className="head_text">Take A Coffee & Chat With Me</h2>
        <div className="Footer_contact">
          <div className="contact_card">
            <img src={mail} alt="" />
            <a href="mailto:locpg2002@gmail.com" className="p-text">
              locpg2002@gmail.com
            </a>
          </div>
          <div className="contact_card">
            <img
              src={phone}
              alt=""
              style={{ maxWidth: "35px", marginRight: "10px" }}
            />
            <a href="tel:0383785499" className="p-text">
              0383785499
            </a>
          </div>
        </div>
        {/* <button className="button s-button">Hire Me</button> */}
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
    </div>
  );
};

export default Contact;

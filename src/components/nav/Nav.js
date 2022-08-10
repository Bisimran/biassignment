import React from "react";
import "./Nav.css";

function Nav (){
  return (
    <>
      <div className="header">
        <img
          src="https://binaryinformatics.co/assets/binary-icon%20(1).svg"
          alt=""
        />
        <div className="header-text">
          <div className="header-para">
            <p className="talk-text">Talk to an Expert Call Toll Free</p>
            <p className="contact-number">+1509-619-7072</p>
          </div>
          <button className="btn btn-text" data-toggle="modal" data-target="#formModal">try it free</button>
        </div>
      </div>
    </>
  );
};

export default Nav;

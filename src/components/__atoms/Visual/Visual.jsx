import React from "react";
import "../Visual/Visual.css";
import Img from "../../../assets/images/iconoir_eye-empty.svg";

function Visual() {
  return (
    <>
      <div className="container4">
        <div className="minor_box">
          <img src={Img} alt="flash" />
          <p className="p4">Visual</p>
        </div>
        <p className="numbers_p">
          73 <span>/ 100 </span>
        </p>
      </div>
    </>
  );
}

export default Visual;
